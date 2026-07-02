"use client";

import { useState, useEffect } from "react";
import { Lock, Mail, Users, MessageSquare, Send, CheckCircle2, AlertCircle, LogOut, Eye, EyeOff } from "lucide-react";

export default function AdminDashboard() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState("");
  
  const [subscribers, setSubscribers] = useState<any[]>([]);
  const [messages, setMessages] = useState<any[]>([]);
  const [loadingData, setLoadingData] = useState(false);

  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [sendResult, setSendResult] = useState<{success?: string, error?: string} | null>(null);

  // Check storage on load
  useEffect(() => {
    const savedPassword = localStorage.getItem("adminPassword") || sessionStorage.getItem("adminPassword");
    if (savedPassword) {
      setPassword(savedPassword);
      setIsAuthenticated(true);
      fetchData(savedPassword);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    setLoadingData(true);
    const success = await fetchData(password);
    if (success) {
      setIsAuthenticated(true);
      if (rememberMe) {
        localStorage.setItem("adminPassword", password);
      } else {
        sessionStorage.setItem("adminPassword", password);
      }
    } else {
      setLoginError("Incorrect password");
    }
    setLoadingData(false);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword("");
    localStorage.removeItem("adminPassword");
    sessionStorage.removeItem("adminPassword");
    setSubscribers([]);
    setMessages([]);
  };

  const fetchData = async (pass: string) => {
    try {
      const res = await fetch("/api/admin/data", {
        headers: {
          "Authorization": `Bearer ${pass}`
        }
      });
      if (res.ok) {
        const data = await res.json();
        setSubscribers(data.subscribers);
        setMessages(data.messages);
        return true;
      }
      return false;
    } catch (err) {
      return false;
    }
  };

  const handleSendNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setSendResult(null);

    try {
      const res = await fetch("/api/admin/newsletter/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${password}`
        },
        body: JSON.stringify({ subject, message: body })
      });
      
      const data = await res.json();
      
      if (res.ok) {
        setSendResult({ success: data.message });
        setSubject("");
        setBody("");
      } else {
        setSendResult({ error: data.error || "Failed to send newsletter" });
      }
    } catch (err) {
      setSendResult({ error: "Network error occurred" });
    } finally {
      setIsSending(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-muted/30 flex items-center justify-center px-4">
        <div className="bg-background p-8 rounded-2xl border border-border shadow-xl max-w-md w-full">
          <div className="flex justify-center mb-6">
            <div className="bg-primary/10 p-4 rounded-full text-primary">
              <Lock className="w-8 h-8" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-center mb-6">Admin Login</h1>
          
          {loginError && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 text-red-500 rounded-lg flex items-center gap-2">
              <AlertCircle className="w-4 h-4" /> {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="text-sm font-medium mb-1 block">Password</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-4 pr-12 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input 
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
              />
              <label htmlFor="rememberMe" className="text-sm cursor-pointer select-none">
                Remember me
              </label>
            </div>

            <button 
              type="submit" 
              disabled={loadingData}
              className="w-full bg-primary hover:bg-secondary text-primary-foreground font-bold py-3 rounded-lg transition-all disabled:opacity-70"
            >
              {loadingData ? "Verifying..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-muted/10">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <Lock className="w-6 h-6 text-primary" /> Admin Dashboard
            </h1>
            <p className="text-muted-foreground mt-1">Manage your subscribers and send mass emails.</p>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 text-red-500 hover:text-red-600 bg-red-500/10 hover:bg-red-500/20 px-4 py-2 rounded-lg transition-colors"
          >
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column: Stats & Compose */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background border border-border rounded-xl p-6 shadow-sm text-center">
                <Users className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                <h3 className="text-3xl font-bold">{subscribers.length}</h3>
                <p className="text-sm text-muted-foreground">Subscribers</p>
              </div>
              <div className="bg-background border border-border rounded-xl p-6 shadow-sm text-center">
                <MessageSquare className="w-8 h-8 mx-auto mb-2 text-emerald-500" />
                <h3 className="text-3xl font-bold">{messages.length}</h3>
                <p className="text-sm text-muted-foreground">Messages</p>
              </div>
            </div>

            {/* Send Newsletter Form */}
            <div className="bg-background border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" /> Compose Newsletter
              </h2>
              
              {sendResult?.success && (
                <div className="mb-4 p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 rounded-lg flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4" /> {sendResult.success}
                </div>
              )}
              {sendResult?.error && (
                <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 text-red-500 rounded-lg flex items-center gap-2 text-sm">
                  <AlertCircle className="w-4 h-4" /> {sendResult.error}
                </div>
              )}

              <form onSubmit={handleSendNewsletter} className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Subject</label>
                  <input 
                    type="text" 
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    placeholder="e.g. New Software Update!"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Message</label>
                  <textarea 
                    rows={8}
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                    placeholder="Write your newsletter here... (You can use plain text, and line breaks will be preserved)"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={isSending || subscribers.length === 0}
                  className="w-full bg-primary hover:bg-secondary text-primary-foreground font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSending ? "Sending to all..." : "Send to All Subscribers"} <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

          </div>

          {/* Right Column: Tables */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Subscribers Table */}
            <div className="bg-background border border-border rounded-xl p-6 shadow-sm overflow-hidden">
              <h2 className="text-xl font-bold mb-4">Subscriber List</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-border text-sm text-muted-foreground">
                      <th className="py-3 px-4">Email</th>
                      <th className="py-3 px-4">Date Subscribed</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subscribers.length === 0 ? (
                      <tr>
                        <td colSpan={2} className="py-8 text-center text-muted-foreground">No subscribers yet.</td>
                      </tr>
                    ) : (
                      subscribers.map((sub, i) => (
                        <tr key={i} className="border-b border-border/50 hover:bg-muted/30">
                          <td className="py-3 px-4 font-medium">{sub.email}</td>
                          <td className="py-3 px-4 text-sm text-muted-foreground">
                            {new Date(sub.createdAt).toLocaleDateString()}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Messages Table */}
            <div className="bg-background border border-border rounded-xl p-6 shadow-sm overflow-hidden">
              <h2 className="text-xl font-bold mb-4">Contact Messages (Log)</h2>
              <p className="text-sm text-muted-foreground mb-4">Note: These are only messages saved since we added the database connection.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-border text-sm text-muted-foreground">
                      <th className="py-3 px-4">Name / Email</th>
                      <th className="py-3 px-4">Message</th>
                      <th className="py-3 px-4">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {messages.length === 0 ? (
                      <tr>
                        <td colSpan={3} className="py-8 text-center text-muted-foreground">No messages logged yet.</td>
                      </tr>
                    ) : (
                      messages.map((msg, i) => (
                        <tr key={i} className="border-b border-border/50 hover:bg-muted/30">
                          <td className="py-3 px-4">
                            <div className="font-medium">{msg.name}</div>
                            <div className="text-xs text-muted-foreground">{msg.email}</div>
                          </td>
                          <td className="py-3 px-4 text-sm max-w-[300px] truncate" title={msg.message}>
                            <span className="font-semibold block">{msg.subject}</span>
                            {msg.message}
                          </td>
                          <td className="py-3 px-4 text-sm text-muted-foreground">
                            {new Date(msg.createdAt).toLocaleDateString()}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

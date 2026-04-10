"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
    role: "user" | "assistant";
    content: string;
}

export default function AsistantPdf() {
    const [file, setFile] = useState<File | null>(null);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [dragOver, setDragOver] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const chatEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, loading]);

    const handleFileChange = (selectedFile: File | null) => {
        if (!selectedFile || selectedFile.type !== "application/pdf") return;
        setFile(selectedFile);
        setMessages([]);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setDragOver(false);
        handleFileChange(e.dataTransfer.files[0]);
    };

    const handleSend = async () => {
        if (!input.trim() || !file || loading) return;

        const userMessage: Message = { role: "user", content: input.trim() };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setLoading(true);

        try {
            // TODO: Ganti dengan endpoint model kamu yang sudah di-deploy
            // Contoh:
            // const response = await fetch("/api/your-deployed-model", {
            //   method: "POST",
            //   body: JSON.stringify({ question: userMessage.content }),
            // });
            // const data = await response.json();
            // setMessages((prev) => [...prev, { role: "assistant", content: data.answer }]);
        } catch {
            setMessages((prev) => [
                ...prev,
                { role: "assistant", content: "Terjadi kesalahan. Silakan coba lagi." },
            ]);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <section className="bg-[#d6d8bc] px-6 py-16">
            <div className="max-w-3xl mx-auto">

                {/* Header */}
                <h2
                    className="text-center text-3xl font-bold text-[#1a1a1a] mb-2"
                    style={{ fontFamily: "Georgia, serif" }}
                >
                    Asisten PDF Akademik
                </h2>
                <p className="text-center text-sm text-[#5a5a46] mb-10">
                    Upload artikel atau jurnal PDF, lalu tanyakan apa saja kepada AI.
                </p>

                {/* Upload Zone */}
                {!file && (
                    <div
                        onClick={() => fileInputRef.current?.click()}
                        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                        onDragLeave={() => setDragOver(false)}
                        onDrop={handleDrop}
                        className={`border-2 border-dashed rounded-2xl p-10 text-center cursor-pointer transition-all mb-7 ${dragOver
                            ? "border-[#6b6e50] bg-white/50"
                            : "border-[#9a9c7a] bg-white/30 hover:border-[#6b6e50] hover:bg-white/50"
                            }`}
                    >
                        <div className="w-12 h-12 rounded-full bg-[#6b6e50] flex items-center justify-center mx-auto mb-4">
                            <svg
                                className="w-5 h-5 text-[#d6d8bc]"
                                fill="none" stroke="currentColor" strokeWidth={2}
                                strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"
                            >
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="17 8 12 3 7 8" />
                                <line x1="12" y1="3" x2="12" y2="15" />
                            </svg>
                        </div>
                        <p className="font-semibold text-[#2a2a1a] mb-1">Seret &amp; lepas file PDF di sini</p>
                        <p className="text-xs text-[#7a7a60] mb-4">atau klik untuk memilih file</p>
                        <span className="inline-block px-5 py-2 bg-[#6b6e50] text-[#f0f0e0] text-sm font-medium rounded-lg">
                            Upload PDF
                        </span>
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="application/pdf"
                            className="hidden"
                            onChange={(e) => handleFileChange(e.target.files?.[0] ?? null)}
                        />
                    </div>
                )}

                {/* File Badge */}
                {file && (
                    <div className="flex items-center gap-3 bg-white/50 border border-[#b0b28e] rounded-xl px-4 py-3 mb-7 text-sm text-[#3a3a28]">
                        <svg
                            className="w-4 h-4 text-[#6b6e50] flex-shrink-0"
                            fill="none" stroke="currentColor" strokeWidth={2}
                            strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"
                        >
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                        </svg>
                        <span className="flex-1 font-medium truncate">{file.name}</span>
                        <button
                            onClick={() => { setFile(null); setMessages([]); }}
                            className="text-[#8a8a70] hover:text-red-600 transition-colors px-1 leading-none"
                        >
                            ✕
                        </button>
                    </div>
                )}

                {/* Chat Box */}
                <div className="bg-white/40 border border-[#b8ba98] rounded-2xl overflow-hidden">

                    {/* Chat Header */}
                    <div className="flex items-center gap-2 px-5 py-3 border-b border-[#c8caaa] text-xs font-semibold text-[#4a4a38]">
                        <div className="w-2 h-2 rounded-full bg-[#6b6e50]" />
                        Chat dengan AI
                    </div>

                    {/* Messages */}
                    <div className="min-h-[280px] max-h-[400px] overflow-y-auto p-5 flex flex-col gap-4">

                        {messages.length === 0 && !loading && (
                            <div className="flex flex-col items-center justify-center h-full py-14 gap-2 text-[#9a9a7a]">
                                <svg className="w-9 h-9 opacity-40" fill="none" stroke="currentColor" strokeWidth={1.4} viewBox="0 0 24 24">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                </svg>
                                <p className="text-sm">
                                    {file ? "Dokumen siap! Silakan ajukan pertanyaan." : "Upload PDF terlebih dahulu untuk memulai."}
                                </p>
                            </div>
                        )}

                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={`flex items-start gap-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                            >
                                <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${msg.role === "user"
                                        ? "bg-[#a8aa88] text-[#2a2a1a]"
                                        : "bg-[#6b6e50] text-[#f0f0e0]"
                                        }`}
                                >
                                    {msg.role === "user" ? "U" : "AI"}
                                </div>
                                <div
                                    className={`max-w-[74%] px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${msg.role === "user"
                                        ? "bg-[#6b6e50] text-[#f0f0e0] rounded-br-sm"
                                        : "bg-white/75 text-[#1a1a1a] border border-[#c8caaa] rounded-bl-sm"
                                        }`}
                                >
                                    {msg.content}
                                </div>
                            </div>
                        ))}

                        {/* Typing Indicator */}
                        {loading && (
                            <div className="flex items-start gap-2">
                                <div className="w-8 h-8 rounded-full bg-[#6b6e50] flex items-center justify-center text-xs font-bold text-[#f0f0e0] flex-shrink-0">
                                    AI
                                </div>
                                <div className="flex items-center gap-1 px-4 py-3 bg-white/75 border border-[#c8caaa] rounded-2xl rounded-bl-sm">
                                    {[0, 1, 2].map((i) => (
                                        <span
                                            key={i}
                                            className="w-2 h-2 rounded-full bg-[#6b6e50] animate-bounce"
                                            style={{ animationDelay: `${i * 0.15}s` }}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}

                        <div ref={chatEndRef} />
                    </div>

                    {/* Input Bar */}
                    <div className="flex items-end gap-2 px-4 py-3 border-t border-[#c8caaa] bg-white/25">
                        <textarea
                            rows={1}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            disabled={!file || loading}
                            placeholder={
                                file
                                    ? "Tanyakan sesuatu tentang PDF ini..."
                                    : "Upload PDF dulu untuk mulai bertanya..."
                            }
                            className="flex-1 resize-none rounded-xl border border-[#b0b28e] bg-white/70 px-4 py-2.5 text-sm text-[#1a1a1a] placeholder-[#9a9a7a] outline-none focus:border-[#6b6e50] focus:bg-white/90 transition-all min-h-[42px] max-h-[120px] leading-relaxed disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                        <button
                            onClick={handleSend}
                            disabled={!input.trim() || !file || loading}
                            className="w-11 h-11 rounded-xl bg-[#6b6e50] flex items-center justify-center flex-shrink-0 hover:bg-[#555840] active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <svg
                                className="w-4 h-4 text-[#f0f0e0]"
                                fill="none" stroke="currentColor" strokeWidth={2}
                                strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"
                            >
                                <line x1="22" y1="2" x2="11" y2="13" />
                                <polygon points="22 2 15 22 11 13 2 9 22 2" />
                            </svg>
                        </button>
                    </div>
                </div>

                <p className="text-center text-xs text-[#8a8a70] mt-3">
                    Tekan Enter untuk mengirim · Shift+Enter untuk baris baru
                </p>
            </div>
        </section>
    );
}
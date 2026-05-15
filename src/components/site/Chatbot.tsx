import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { useServerFn } from "@tanstack/react-start";
import { askChatbot } from "@/lib/chat.functions";
import { SCHOOL } from "@/lib/school-data";

type Msg = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = [
  "Berapa jumlah guru?",
  "Apa akreditasi sekolah?",
  "Jam operasional sekolah?",
  "Dimana lokasi sekolah?",
];

export function Chatbot() {
  const ask = useServerFn(askChatbot);
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "assistant",
      content: `Halo! 👋 Saya **Asisten AI ${SCHOOL.shortName}**. Tanyakan apa saja seputar sekolah — fasilitas, akreditasi, jam operasional, lokasi, dan lainnya.`,
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  const send = async (text: string) => {
    if (!text.trim() || loading) return;
    const next: Msg[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await ask({ data: { messages: next } });
      setMessages([...next, { role: "assistant", content: res.reply }]);
    } catch (e) {
      setMessages([...next, { role: "assistant", content: "Maaf, terjadi kesalahan." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-20 lg:bottom-6 right-4 lg:right-6 z-50 size-14 rounded-full gradient-primary shadow-glow grid place-items-center text-primary-foreground animate-pulse-glow"
        aria-label="Buka asisten AI"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="size-6" />
            </motion.span>
          ) : (
            <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle className="size-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 bottom-36 lg:inset-auto lg:bottom-24 lg:right-6 lg:w-[400px] h-[560px] max-h-[78vh] z-50 glass-strong rounded-3xl shadow-elegant flex flex-col overflow-hidden"
          >
            <div className="px-5 py-4 gradient-primary text-primary-foreground flex items-center gap-3">
              <div className="size-10 rounded-xl bg-white/20 grid place-items-center">
                <Sparkles className="size-5" />
              </div>
              <div className="flex-1">
                <div className="font-display font-semibold">Asisten AI Sekolah</div>
                <div className="text-xs opacity-80">Powered by Gemini</div>
              </div>
              <div className="size-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      m.role === "user"
                        ? "gradient-primary text-primary-foreground rounded-br-sm"
                        : "bg-card border rounded-bl-sm"
                    }`}
                  >
                    <div className="prose prose-sm max-w-none dark:prose-invert prose-p:my-1 prose-ul:my-1">
                      <ReactMarkdown>{m.content}</ReactMarkdown>
                    </div>
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-card border rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-2 text-muted-foreground text-sm">
                    <Loader2 className="size-4 animate-spin" /> Mengetik...
                  </div>
                </div>
              )}
            </div>

            {messages.length <= 1 && (
              <div className="px-4 pb-2 flex flex-wrap gap-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="text-xs px-3 py-1.5 rounded-full border bg-card hover:bg-accent transition"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="p-3 border-t flex gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Tanyakan tentang sekolah..."
                className="flex-1 px-4 py-2.5 rounded-xl bg-background border outline-none focus:ring-2 ring-primary/30 text-sm"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="size-11 grid place-items-center rounded-xl gradient-primary text-primary-foreground disabled:opacity-50 hover:shadow-glow transition"
              >
                <Send className="size-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

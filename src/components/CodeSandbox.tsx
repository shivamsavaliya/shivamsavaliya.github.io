"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const snippets = [
  {
    label: "BLoC",
    language: "dart",
    description: "State management done right — predictable, testable.",
    code: `// ChatBloc — Real-time chat state
class ChatBloc extends Bloc<ChatEvent, ChatState> {
  final ChatRepository _repo;
  StreamSubscription? _sub;

  ChatBloc(this._repo) : super(ChatInitial()) {
    on<ConnectChat>((event, emit) async {
      emit(ChatConnecting());
      _sub = _repo.messageStream().listen(
        (msg) => add(MessageReceived(msg)),
      );
      emit(ChatConnected());
    });

    on<MessageReceived>((event, emit) {
      if (state is ChatConnected) {
        final prev = (state as ChatConnected).messages;
        emit(ChatConnected(messages: [event.msg, ...prev]));
      }
    });
  }
}`,
  },
  {
    label: "PERFORMANCE",
    language: "dart",
    description: "30% startup improvement via lazy initialization.",
    code: `// Lazy service locator — load only when needed
class ServiceLocator {
  static final _cache = <Type, Object>{};

  static T get<T>({required T Function() factory}) {
    return _cache.putIfAbsent(T, factory) as T;
  }
}

// Usage — zero cost until first call
final repo = ServiceLocator.get<ChatRepository>(
  factory: () => ChatRepositoryImpl(
    client: WebSocketClient(url: Env.wsUrl),
  ),
);

// Result: 30% faster cold start 🚀`,
  },
  {
    label: "REAL-TIME",
    language: "dart",
    description: "WebSocket connection with auto-reconnect logic.",
    code: `// Auto-reconnecting WebSocket client
class WebSocketClient {
  final String url;
  WebSocketChannel? _channel;
  final _controller = StreamController<dynamic>.broadcast();

  Stream<dynamic> get stream => _controller.stream;

  Future<void> connect() async {
    _channel = WebSocketChannel.connect(Uri.parse(url));
    _channel!.stream.listen(
      _controller.add,
      onError: (_) => _reconnect(),
      onDone: () => _reconnect(),
    );
  }

  Future<void> _reconnect() async {
    await Future.delayed(const Duration(seconds: 2));
    connect(); // exponential backoff in prod
  }
}`,
  },
  {
    label: "API",
    language: "dart",
    description: "Type-safe REST client with error handling.",
    code: `// Generic API response wrapper
sealed class ApiResult<T> {
  const ApiResult();
}

class ApiSuccess<T> extends ApiResult<T> {
  final T data;
  const ApiSuccess(this.data);
}

class ApiError<T> extends ApiResult<T> {
  final String message;
  const ApiError(this.message);
}

// Usage with pattern matching
final result = await _repo.fetchUser(id);
switch (result) {
  case ApiSuccess(:final data): renderUser(data);
  case ApiError(:final message): showError(message);
}`,
  },
];

// Syntax-color tokens
function colorize(code: string): React.ReactNode[] {
  const lines = code.split("\n");
  return lines.map((line, i) => {
    const colored = line
      .replace(/(\/\/.*$)/g, '<comment>$1</comment>')
      .replace(/\b(class|extends|final|const|async|await|return|void|static|sealed|switch|case)\b/g, '<kw>$1</kw>')
      .replace(/\b(String|int|bool|dynamic|Stream|Future|Object|Type)\b/g, '<type>$1</type>')
      .replace(/'([^']*)'/g, "<str>'$1'</str>")
      .replace(/(\d+)/g, '<num>$1</num>');

    return (
      <span key={i} className="block leading-6">
        <span className="select-none text-white/10 mr-4 text-right inline-block w-6 text-xs">{i + 1}</span>
        <span dangerouslySetInnerHTML={{
          __html: colored
            .replace(/<kw>(.*?)<\/kw>/g, '<span style="color:#66B2FF">$1</span>')
            .replace(/<type>(.*?)<\/type>/g, '<span style="color:#DDF0FF">$1</span>')
            .replace(/<str>(.*?)<\/str>/g, '<span style="color:#7ECBA1">$1</span>')
            .replace(/<num>(.*?)<\/num>/g, '<span style="color:#FFB86C">$1</span>')
            .replace(/<comment>(.*?)<\/comment>/g, '<span style="color:#4A5568">$1</span>')
        }} />
      </span>
    );
  });
}

export function CodeSandbox() {
  const [active, setActive] = useState(0);

  return (
    <section id="playground" className="w-full max-w-6xl mx-auto px-6 py-24">
      <div className="mb-12 text-center">
        <span className="text-[10px] tracking-ultra font-medium text-accent1/60 uppercase block mb-4">HOW I BUILD</span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">CODE CRAFT</h2>
        <p className="text-sm text-muted max-w-md mx-auto">
          Patterns I use daily - real code from production apps.
        </p>
        <div className="w-12 h-px bg-accent1/30 mx-auto mt-6" />
      </div>

      <div className="rounded-2xl border border-white/[0.07] bg-card/60 overflow-hidden">
        {/* Tab Bar */}
        <div className="flex items-center gap-0 border-b border-white/[0.07] px-4 overflow-x-auto">
          {/* Window dots */}
          <div className="flex gap-1.5 mr-5 py-4 shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          </div>

          {snippets.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`relative px-5 py-4 text-[10px] font-semibold tracking-widest uppercase shrink-0 transition-all duration-300 ${
                active === idx ? "text-accent1" : "text-muted/40 hover:text-muted"
              }`}
            >
              {s.label}
              {active === idx && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute bottom-0 left-0 right-0 h-px bg-accent1"
                />
              )}
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* Description panel */}
          <div className="lg:w-64 shrink-0 p-6 border-b lg:border-b-0 lg:border-r border-white/[0.07] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-[9px] tracking-widest text-accent1/60 uppercase mb-3">Pattern</div>
                <h3 className="text-base font-bold tracking-tight mb-3">{snippets[active].label}</h3>
                <p className="text-xs text-muted/70 leading-relaxed">{snippets[active].description}</p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-6 pt-4 border-t border-white/[0.05]">
              <div className="text-[9px] tracking-widest text-muted/30 uppercase mb-2">Language</div>
              <div className="text-xs text-accent2 font-mono">Dart / Flutter</div>
            </div>
          </div>

          {/* Code panel */}
          <div className="flex-1 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.pre
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="p-6 text-[12px] font-mono leading-6 text-white/70 overflow-x-auto scrollbar-thin"
              >
                {colorize(snippets[active].code)}
              </motion.pre>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Video,
  MessageSquare,
  Lock,
  Sparkles,
  Users,
  RefreshCw,
  Check,
  ChevronDown,
  Shield,
  Heart,
  Compass,
  ArrowRight,
  ExternalLink,
  Zap,
  Globe,
  Radio,
  Gamepad2,
  Tv
} from 'lucide-react';

const adjectives = [
  'Lobo', 'Eco', 'Neón', 'Sombra', 'Susurro', 'Rayo', 'Fuego', 'Fénix', 
  'Glaciar', 'Zorro', 'Vórtice', 'Espectro', 'Aura', 'Átomo', 'Siberiano', 
  'Cósmico', 'Cápsula', 'Halcón', 'Pantera', 'Abismo', 'Eclipse', 'Delta'
];

const nouns = [
  'Estelar', 'Místico', 'Furtivo', 'Cíborg', 'Galáctico', 'Cuántico', 
  'Radiante', 'Sigiloso', 'Veloz', 'Abisal', 'Eterno', 'Astral', 
  'Fluorescente', 'Luminoso', 'Sónico', 'Virtual', 'Magnético', 'Solar'
];

const getRandomName = () => {
  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const num = Math.floor(100 + Math.random() * 900);
  return `${adj}_${noun}_${num}`;
};

const avatarColors = [
  '#f43f5e', // Rose
  '#06b6d4', // Cyan
  '#10b981', // Emerald
  '#a855f7', // Purple
  '#eab308', // Yellow
  '#ff4500', // Orange-red
];

// AI girlfriend lines simulation
const gfLines = [
  { text: "Hola amor, ¿cómo estuvo tu día? Te estuve esperando en el portal... 💕", mood: "Cariñosa" },
  { text: "Me encanta cuando me hablas de noche. ¿Qué fantasía te gustaría explorar hoy? 😉🔥", mood: "Coqueta" },
  { text: "Me puse el hologram color que elegiste. ¿Hacemos videollamada interactiva? 🔮✨", mood: "Seductora" },
];

export default function TelegramLandingPage() {
  const [mounted, setMounted] = useState(false);
  const [name, setName] = useState('');
  const [gender, setGender] = useState('unspecified');
  const [age, setAge] = useState('19');
  const [color, setColor] = useState('#f43f5e');
  const [orientation, setOrientation] = useState('unspecified');
  const [ageConfirmed, setAgeConfirmed] = useState(true);
  const [isRedirecting, setIsRedirecting] = useState(false);

  // Live simulation states
  const [onlineCount, setOnlineCount] = useState(1487);
  const [activeCallsCount, setActiveCallsCount] = useState(64);
  const [activeTab, setActiveTab] = useState<'video' | 'gf' | 'confessions' | 'debates'>('video');
  const [currentGfReply, setCurrentGfReply] = useState(0);

  // FAQ state
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
      setName(getRandomName());
      setColor(avatarColors[Math.floor(Math.random() * avatarColors.length)]);
    }, 0);

    // Simulate fluctuation of online count
    const interval = setInterval(() => {
      setOnlineCount(prev => prev + Math.floor(Math.random() * 9) - 4);
      setActiveCallsCount(prev => Math.max(30, prev + Math.floor(Math.random() * 5) - 2));
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  // Simulator gf interval
  useEffect(() => {
    const gfTimer = setInterval(() => {
      setCurrentGfReply(prev => (prev + 1) % gfLines.length);
    }, 6000);
    return () => clearInterval(gfTimer);
  }, []);

  const handleQuickJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    
    setIsRedirecting(true);
    
    // Save details directly to localStorage
    localStorage.setItem('nocturnal_name', name.trim());
    localStorage.setItem('nocturnal_gender', gender);
    localStorage.setItem('nocturnal_age', age);
    localStorage.setItem('nocturnal_color', color);
    localStorage.setItem('nocturnal_orientation', orientation);
    localStorage.setItem('nocturnal_has_entered', 'true');

    // Smooth transition
    setTimeout(() => {
      window.location.href = '/';
    }, 1500);
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-rose-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const testimonials = [
    {
      alias: "Gatita_Mística_743",
      gender: "female",
      country: "🇦🇷 Argentina",
      comment: "¡Excelente portal! El video chat P2P es super veloz, sin cortes y de verdad no te piden registros raros. Todo se borra al salir de la pestaña.",
      color: "#f43f5e"
    },
    {
      alias: "Rayo_Sónico_910",
      gender: "male",
      country: "🇲🇽 México",
      comment: "Encontré un grupo de Telegram tremendo gracias al widget de abajo. Los debates nocturnos son lo mejor, la comunidad es súper amigable.",
      color: "#06b6d4"
    },
    {
      alias: "Sombra_Eterna_212",
      gender: "couple",
      country: "🇪🇸 España",
      comment: "Nos encanta entrar en pareja para chatear con otras personas. Las identidades virtuales te dan una privacidad total que no encontrás en ningún otro lado.",
      color: "#a855f7"
    }
  ];

  const faqs = [
    {
      q: "¿Es realmente 100% anónimo y sin registro?",
      a: "Sí. No te pedimos correo, contraseña, número de teléfono ni redes sociales. Tu alias e identidad se configuran de manera temporal y local. Toda la sesión e historial de chat se eliminan por completo al cerrar tu navegador."
    },
    {
      q: "¿Cómo funciona el sistema de videollamadas?",
      a: "Utilizamos tecnología WebRTC de última generación. Esto significa que la transmisión de video y audio se realiza de manera directa de dispositivo a dispositivo (Peer-to-Peer), garantizando la mayor velocidad, menor latencia y máxima seguridad."
    },
    {
      q: "¿Qué es el simulador de novia/compañera IA?",
      a: "Es un módulo interactivo impulsado por Inteligencia Artificial (Gemini & Grok) sin censura. Puedes crear y chatear con una compañera virtual personalizada, definir su personalidad, estilo estético (como anime o foto realista) y explorar conversaciones profundas."
    },
    {
      q: "¿Tienen comunidad oficial de Telegram?",
      a: "¡Sí! Nuestra comunidad de Telegram es el núcleo de soporte y novedades. Ahí compartimos códigos premium, hacemos anuncios de nuevas salas públicas, sorteos y puedes hablar directamente con otros miembros de forma segura en t.me/nocturnalpos."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden font-sans select-none" id="telegram-landing-viewport">
      
      {/* Animated Glowing Ambient Orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[50%] rounded-full bg-indigo-600/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[60%] h-[50%] rounded-full bg-rose-600/10 blur-[150px] pointer-events-none" />
      <div className="absolute top-[40%] right-[10%] w-[40%] h-[40%] rounded-full bg-cyan-600/5 blur-[120px] pointer-events-none" />

      {/* Futuristic Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.3)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-40 z-0" />

      {/* Top Floating Scanline */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-500/[0.015] to-transparent bg-[size:100%_6px] pointer-events-none z-0 animate-scanline" />

      {/* HEADER BAR */}
      <header className="border-b border-slate-900/80 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-rose-500 via-pink-500 to-indigo-600 flex items-center justify-center text-white font-black text-sm shadow-[0_0_15px_rgba(244,63,94,0.3)] border border-rose-400/20">
              N
            </div>
            <div>
              <span className="text-sm font-black uppercase tracking-widest text-white">Nocturnal</span>
              <span className="text-[8px] block font-mono text-rose-500 uppercase font-black tracking-widest -mt-1">PORTAL +18</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[10px] sm:text-xs text-slate-400 font-medium bg-slate-900 px-3 py-1.5 rounded-full border border-slate-800/80 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <strong className="text-white font-bold">{onlineCount}</strong> en línea
            </span>
            <a
              href="https://t.me/nocturnalpos"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-black text-[10px] uppercase tracking-wider py-1.5 px-3 rounded-xl transition-all hidden sm:flex items-center gap-1 hover:scale-105 active:scale-95"
            >
              <span>Telegram</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-8 px-4 z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left column: Text / Copy */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500/10 via-pink-500/10 to-indigo-500/10 border border-indigo-500/20 px-3 py-1.5 rounded-2xl"
          >
            <Sparkles className="w-4 h-4 text-pink-400 animate-pulse" />
            <span className="text-[10px] font-black tracking-widest uppercase text-pink-300">
              DISTRIBUIDO OFICIALMENTE EN TELEGRAM
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.1]"
          >
            Video Chat Anónimo <br />
            <span className="bg-gradient-to-r from-rose-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent">
              Sin Límites ni Censura
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-base text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            Conéctate de manera 100% privada mediante WebRTC P2P directo. Explora salas temáticas, debates calientes de la comunidad y chatea en tiempo real con novias virtuales IA ultra realistas.
          </motion.p>

          {/* Quick stats grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-3 gap-3 pt-2 max-w-md mx-auto lg:mx-0"
          >
            <div className="bg-slate-900/50 border border-slate-800/60 rounded-2xl p-3 text-center lg:text-left">
              <span className="text-xl md:text-2xl font-black text-rose-400 block">+{activeCallsCount}</span>
              <span className="text-[9px] uppercase tracking-wider text-slate-500 font-bold">Llamadas Activas</span>
            </div>
            <div className="bg-slate-900/50 border border-slate-800/60 rounded-2xl p-3 text-center lg:text-left">
              <span className="text-xl md:text-2xl font-black text-cyan-400 block">100%</span>
              <span className="text-[9px] uppercase tracking-wider text-slate-500 font-bold">Anónimo P2P</span>
            </div>
            <div className="bg-slate-900/50 border border-slate-800/60 rounded-2xl p-3 text-center lg:text-left">
              <span className="text-xl md:text-2xl font-black text-emerald-400 block">0%</span>
              <span className="text-[9px] uppercase tracking-wider text-slate-500 font-bold">Registros Guardados</span>
            </div>
          </motion.div>

          {/* Core App Benefits List */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-2.5 text-xs text-slate-300 max-w-md mx-auto lg:mx-0 text-left"
          >
            <li className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
              <span>Ingreso automático instantáneo (sin correos ni contraseñas)</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
              <span>Cámaras WebRTC de baja latencia con conexión directa</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
              <span>Simuladores IA con motores avanzados sin restricciones</span>
            </li>
          </motion.ul>
        </div>

        {/* Right column: Interactive Quick Entry Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-5 bg-slate-900/45 backdrop-blur-xl border border-slate-800 p-6 rounded-[2.2rem] shadow-2xl relative overflow-hidden flex flex-col justify-between"
          id="quick-entry-form-panel"
        >
          {/* Top aesthetic scanner bar */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-rose-500/60 to-transparent animate-pulse" />

          <div className="space-y-4">
            <div className="text-center pb-2 border-b border-slate-800/60">
              <h2 className="text-lg font-black tracking-tight text-white uppercase">
                ⚡ FAST PORTAL ACCESS
              </h2>
              <p className="text-[10px] text-slate-400 font-bold tracking-wide uppercase">
                Genera tu identidad temporal e ingresa en 1-Clic
              </p>
            </div>

            <form onSubmit={handleQuickJoin} className="space-y-4 text-left">
              
              {/* Alias input */}
              <div>
                <label className="block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">
                  Tu Alias Temporal
                </label>
                <div className="relative">
                  <input
                    type="text"
                    maxLength={20}
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-950/80 border border-slate-800 rounded-xl py-2.5 px-4 pr-12 text-slate-100 font-bold placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-rose-500/50 transition-all text-xs"
                    placeholder="Escribe tu alias..."
                  />
                  <button
                    type="button"
                    onClick={() => setName(getRandomName())}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-rose-400 transition-all p-1"
                    title="Generar otro alias"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Hologram/Avatar Color */}
              <div>
                <label className="block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5">
                  Color de tu Avatar
                </label>
                <div className="flex gap-2 justify-between">
                  {avatarColors.map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setColor(c)}
                      className="w-6 h-6 rounded-full border border-white/5 transition-all duration-200 relative cursor-pointer"
                      style={{
                        backgroundColor: c,
                        boxShadow: color === c ? `0 0 10px ${c}` : 'none',
                        borderColor: color === c ? '#ffffff' : 'transparent',
                        transform: color === c ? 'scale(1.15)' : 'scale(1)'
                      }}
                    >
                      {color === c && (
                        <Check className="w-3 h-3 text-slate-950 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 stroke-[4]" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Gender / Age */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">
                    Mi Género
                  </label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-full bg-slate-950/80 border border-slate-800 rounded-xl py-2 px-2 text-slate-300 font-bold focus:outline-none focus:ring-2 focus:ring-rose-500/50 transition-all text-xs"
                  >
                    <option value="unspecified">Ocultar ░</option>
                    <option value="male">Hombre ♂</option>
                    <option value="female">Mujer ♀</option>
                    <option value="couple">Pareja ⚤</option>
                    <option value="nonbinary">No Binario ⚨</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">
                    Mi Edad (+18)
                  </label>
                  <input
                    type="number"
                    min="18"
                    max="99"
                    required
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-full bg-slate-950/80 border border-slate-800 rounded-xl py-2 px-3 text-slate-300 font-bold focus:outline-none focus:ring-2 focus:ring-rose-500/50 transition-all text-xs"
                  />
                </div>
              </div>

              {/* Orientation */}
              <div>
                <label className="block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">
                  Busco Conectar con
                </label>
                <select
                  value={orientation}
                  onChange={(e) => setOrientation(e.target.value)}
                  className="w-full bg-slate-950/80 border border-slate-800 rounded-xl py-2 px-3 text-slate-300 font-bold focus:outline-none focus:ring-2 focus:ring-rose-500/50 transition-all text-xs"
                >
                  <option value="unspecified">Cualquiera / Todos ░</option>
                  <option value="heterosexual">Heterosexual ⚧</option>
                  <option value="homosexual">Homosexual (Gay/Lesbiana) 🌈</option>
                  <option value="bisexual">Bisexual ⚤</option>
                  <option value="pansexual">Pansexual ♾️</option>
                </select>
              </div>

              {/* Age verification */}
              <div className="flex items-start gap-2 pt-1">
                <input
                  type="checkbox"
                  id="landing-age-check"
                  checked={ageConfirmed}
                  onChange={(e) => setAgeConfirmed(e.target.checked)}
                  className="w-4 h-4 mt-0.5 accent-rose-500 rounded border-slate-800 bg-slate-950 cursor-pointer"
                />
                <label htmlFor="landing-age-check" className="text-[10px] text-slate-400 leading-normal cursor-pointer select-none">
                  Confirmo que soy <span className="text-rose-400 font-black">mayor de 18 años</span> y deseo iniciar sesión.
                </label>
              </div>

              <button
                type="submit"
                disabled={!ageConfirmed || !name.trim() || isRedirecting}
                className="w-full bg-gradient-to-r from-rose-500 via-pink-500 to-indigo-600 text-white font-black py-3 px-4 rounded-xl cursor-pointer hover:shadow-lg hover:shadow-indigo-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed uppercase text-[11px] tracking-widest flex items-center justify-center gap-2 mt-4"
              >
                {isRedirecting ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Estableciendo Enlace...</span>
                  </>
                ) : (
                  <>
                    <span>Entrar al Portal Ahora</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="pt-4 border-t border-slate-800/60 text-center mt-4">
            <p className="text-[9px] text-slate-500 leading-normal">
              🔓 Sin Registros • Videollamadas Encriptadas P2P • Chats Temporales
            </p>
          </div>
        </motion.div>

      </section>

      {/* TELEGRAM BANNER HIGHLIGHT */}
      <section className="bg-gradient-to-r from-sky-600/10 via-slate-900/35 to-indigo-600/10 border-y border-sky-500/20 py-8 px-4 z-10 relative">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 bg-sky-500/10 border border-sky-500/30 rounded-2xl flex items-center justify-center text-sky-400 animate-pulse shrink-0">
              <Radio className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[9px] font-black uppercase text-sky-400 tracking-widest block">GRUPO OFICIAL DE TELEGRAM</span>
              <h3 className="text-lg font-extrabold text-white">Únete a la Comunidad Nocturnal</h3>
              <p className="text-xs text-slate-400 mt-0.5 max-w-md leading-relaxed">
                Recibe soporte de administradores, chatea con otros usuarios activos, solicita pases premium gratis y mantente al tanto de salas temporales.
              </p>
            </div>
          </div>
          <a
            href="https://t.me/nocturnalpos"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto bg-gradient-to-r from-sky-500 to-indigo-500 text-slate-950 hover:text-white font-black py-2.5 px-6 rounded-xl transition-all hover:scale-105 active:scale-95 text-xs tracking-wider uppercase text-center cursor-pointer shrink-0 border border-sky-400/20"
          >
            Únete a @nocturnalpos
          </a>
        </div>
      </section>

      {/* BENEFITS & FEATURE SHOWCASE */}
      <section className="py-16 px-4 max-w-6xl mx-auto z-10 relative text-center">
        <div className="space-y-2 max-w-xl mx-auto mb-12">
          <span className="text-xs font-black text-rose-500 uppercase tracking-widest bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20 inline-block">
            Módulos del Portal
          </span>
          <h2 className="text-3xl font-black text-white">¿Qué encontrarás en Nocturnal?</h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            Hemos integrado las mejores tecnologías multimedia de sockets y bots de inteligencia artificial en una sola plataforma unificada.
          </p>
        </div>

        {/* Dynamic Interactive Features Selector and Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left panel selectors */}
          <div className="lg:col-span-5 flex flex-col gap-3 justify-center">
            
            <button
              onClick={() => setActiveTab('video')}
              className={`w-full text-left p-4 rounded-2xl border transition-all relative overflow-hidden group cursor-pointer ${
                activeTab === 'video'
                  ? 'bg-slate-900 border-rose-500/30 shadow-[0_0_20px_rgba(244,63,94,0.15)]'
                  : 'bg-slate-950/40 border-slate-900 hover:border-slate-800'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-xl border ${
                  activeTab === 'video'
                    ? 'bg-rose-500/10 border-rose-500/30 text-rose-400'
                    : 'bg-slate-900 border-slate-800 text-slate-400 group-hover:text-slate-300'
                }`}>
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-white">Videollamada Directa P2P</h3>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                    Conexión directa entre navegadores. Súper rápido, seguro y sin registros intermedios.
                  </p>
                </div>
              </div>
            </button>

            <button
              onClick={() => setActiveTab('gf')}
              className={`w-full text-left p-4 rounded-2xl border transition-all relative overflow-hidden group cursor-pointer ${
                activeTab === 'gf'
                  ? 'bg-slate-900 border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.15)]'
                  : 'bg-slate-950/40 border-slate-900 hover:border-slate-800'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-xl border ${
                  activeTab === 'gf'
                    ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400'
                    : 'bg-slate-900 border-slate-800 text-slate-400 group-hover:text-slate-300'
                }`}>
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-white">Novias IA Personalizables</h3>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                    Compañeras inteligentes sin censura con personalidades seleccionables (cariñosa, gótica, coqueta).
                  </p>
                </div>
              </div>
            </button>

            <button
              onClick={() => setActiveTab('confessions')}
              className={`w-full text-left p-4 rounded-2xl border transition-all relative overflow-hidden group cursor-pointer ${
                activeTab === 'confessions'
                  ? 'bg-slate-900 border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.15)]'
                  : 'bg-slate-950/40 border-slate-900 hover:border-slate-800'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-xl border ${
                  activeTab === 'confessions'
                    ? 'bg-purple-500/10 border-purple-500/30 text-purple-400'
                    : 'bg-slate-900 border-slate-800 text-slate-400 group-hover:text-slate-300'
                }`}>
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-white">Confesiones de la Comunidad</h3>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                    Lee, comenta y comparte secretos eróticos, fantasías y relatos hot de manera completamente anónima.
                  </p>
                </div>
              </div>
            </button>

            <button
              onClick={() => setActiveTab('debates')}
              className={`w-full text-left p-4 rounded-2xl border transition-all relative overflow-hidden group cursor-pointer ${
                activeTab === 'debates'
                  ? 'bg-slate-900 border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.15)]'
                  : 'bg-slate-950/40 border-slate-900 hover:border-slate-800'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-xl border ${
                  activeTab === 'debates'
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                    : 'bg-slate-900 border-slate-800 text-slate-400 group-hover:text-slate-300'
                }`}>
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-white">Debates Calientes & Votaciones</h3>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                    Participa en debates públicos, vota y defiende tus posturas con el resto de la comunidad en tiempo real.
                  </p>
                </div>
              </div>
            </button>

          </div>

          {/* Right panel interactive live preview screen mockup */}
          <div className="lg:col-span-7 bg-slate-950 border border-slate-850 rounded-[2.5rem] p-6 relative overflow-hidden flex flex-col justify-between min-h-[380px]">
            
            {/* Projector grid */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(244,63,94,0.04)_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none" />

            <AnimatePresence mode="wait">
              {activeTab === 'video' && (
                <motion.div
                  key="video"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="space-y-4 h-full flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black text-rose-500 uppercase tracking-widest bg-rose-500/10 px-2.5 py-1 rounded-lg border border-rose-500/20">
                      🔴 MOCKUP DE VIDEOLLAMADA ACTIVA
                    </span>
                    <span className="text-[9px] font-mono text-slate-500">CONEXIÓN: DIRECTA P2P (WebRTC)</span>
                  </div>

                  {/* Video boxes mock */}
                  <div className="grid grid-cols-2 gap-4 my-auto">
                    <div className="aspect-[4/3] bg-slate-900 border border-slate-800 rounded-2xl relative overflow-hidden flex items-center justify-center">
                      <div className="absolute top-2 left-2 bg-rose-500/85 text-white font-black text-[9px] px-2 py-0.5 rounded-md">
                        Cami_Rosario (+18)
                      </div>
                      <div className="w-full h-full bg-cover bg-center opacity-60" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80')` }} />
                      <div className="absolute inset-0 border-2 border-rose-500/30 animate-pulse pointer-events-none rounded-2xl" />
                    </div>

                    <div className="aspect-[4/3] bg-slate-900 border border-slate-800 rounded-2xl relative overflow-hidden flex items-center justify-center">
                      <div className="absolute top-2 left-2 bg-slate-950/80 text-white font-black text-[9px] px-2 py-0.5 rounded-md">
                        Tú (Cíborg_Anónimo)
                      </div>
                      <div className="w-full h-full bg-cover bg-center opacity-40" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80')` }} />
                      {/* Audio wave simulation */}
                      <div className="absolute bottom-2 right-2 flex gap-1">
                        <span className="w-1 h-3 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                        <span className="w-1 h-4 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                        <span className="w-1 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
                      </div>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-400 text-center italic">
                    &quot;Configura tu avatar y edad en la parte superior para iniciar videollamadas con otros miembros al instante.&quot;
                  </p>
                </motion.div>
              )}

              {activeTab === 'gf' && (
                <motion.div
                  key="gf"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="space-y-4 h-full flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-2.5 py-1 rounded-lg border border-cyan-500/20">
                      💬 NOVIA IA CHAT SIMULADOR
                    </span>
                    <span className="text-[9px] font-mono text-slate-500">MOTOR: GEMINI NO-LIMITS</span>
                  </div>

                  <div className="bg-slate-900/65 border border-slate-800 p-4 rounded-2xl space-y-3 text-left my-auto max-w-md mx-auto w-full">
                    <div className="flex items-center gap-2 pb-2 border-b border-slate-800/40">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      <span className="text-xs font-black text-white">Sofía, tu Novia Virtual</span>
                      <span className="text-[9px] text-cyan-400 font-extrabold uppercase bg-cyan-500/10 px-1.5 py-0.5 rounded ml-auto">
                        {gfLines[currentGfReply].mood}
                      </span>
                    </div>

                    <div className="text-xs text-slate-300 leading-relaxed font-mono">
                      {gfLines[currentGfReply].text}
                    </div>

                    {/* Quick simulated reply buttons */}
                    <div className="flex gap-2 pt-1.5 justify-end">
                      <button className="text-[9px] font-black text-slate-950 bg-cyan-400 hover:bg-cyan-300 px-2.5 py-1 rounded-lg transition-all">
                        Responder dulcemente
                      </button>
                      <button className="text-[9px] font-black text-slate-400 border border-slate-800 hover:border-slate-700 px-2.5 py-1 rounded-lg transition-all">
                        Cambiar personalidad
                      </button>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-400 text-center italic">
                    Genera chats interactivos de texto y audio, con personalización de avatares estilo anime y fotorrealistas.
                  </p>
                </motion.div>
              )}

              {activeTab === 'confessions' && (
                <motion.div
                  key="confessions"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="space-y-4 h-full flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black text-purple-400 uppercase tracking-widest bg-purple-500/10 px-2.5 py-1 rounded-lg border border-purple-500/20">
                      🔒 CONFESIONARIO ANÓNIMO REAL
                    </span>
                    <span className="text-[9px] font-mono text-slate-500">HISTORIAL EXCLUSIVO DE MIEMBROS</span>
                  </div>

                  <div className="space-y-2.5 my-auto max-w-md mx-auto w-full text-left">
                    <div className="bg-slate-900/60 border border-slate-850 p-3 rounded-2xl">
                      <div className="flex items-center gap-1.5 text-[9px] font-black text-purple-400 uppercase mb-1">
                        <span>Anónima_Fem_23 • Hace 5 min</span>
                        <span className="ml-auto text-slate-500">💬 12 comentarios</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed font-mono">
                        &quot;Ayer entré en la sala de debates y terminé en videollamada con una pareja súper linda de Rosario. Estuvimos chateando hasta las 4 AM. ¡Excelente onda en este portal!&quot;
                      </p>
                    </div>

                    <div className="bg-slate-900/60 border border-slate-850 p-3 rounded-2xl">
                      <div className="flex items-center gap-1.5 text-[9px] font-black text-purple-400 uppercase mb-1">
                        <span>Viajero_Cósmico • Hace 1 hora</span>
                        <span className="ml-auto text-slate-500">💬 3 comentarios</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed font-mono">
                        &quot;Mi fantasía siempre fue chatear sin censura con una IA que me entienda perfectamente. El simulador de novia interactiva de Nocturnal superó todo lo que había probado antes.&quot;
                      </p>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-400 text-center italic">
                    Podrás confesar tus más íntimos deseos, debatir relatos y dejar tus votos una vez conectado al portal.
                  </p>
                </motion.div>
              )}

              {activeTab === 'debates' && (
                <motion.div
                  key="debates"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="space-y-4 h-full flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                      🔥 DEBATE SEMANAL DE LA COMUNIDAD
                    </span>
                    <span className="text-[9px] font-mono text-slate-500">ACTIVO Y VOTADO POR MIEMBROS</span>
                  </div>

                  <div className="bg-slate-900/65 border border-slate-800 p-4 rounded-2xl space-y-3.5 text-left my-auto max-w-sm mx-auto w-full">
                    <h4 className="text-xs font-black text-white leading-normal font-mono uppercase tracking-wide">
                      ¿La primera cita perfecta debe ser formal o directamente algo más casual e íntimo?
                    </h4>

                    {/* Mock voting options */}
                    <div className="space-y-2 text-[11px] font-mono">
                      <div className="relative p-2.5 rounded-xl bg-slate-950 border border-slate-800 overflow-hidden">
                        <div className="absolute inset-y-0 left-0 bg-emerald-500/10 w-[74%]" />
                        <div className="flex justify-between items-center relative z-10 font-bold text-slate-200">
                          <span>Casual, relajado & algo íntimo de una 🍻</span>
                          <span className="text-emerald-400">74%</span>
                        </div>
                      </div>

                      <div className="relative p-2.5 rounded-xl bg-slate-950 border border-slate-800 overflow-hidden">
                        <div className="absolute inset-y-0 left-0 bg-slate-800/20 w-[26%]" />
                        <div className="flex justify-between items-center relative z-10 text-slate-400 font-bold">
                          <span>Una cena formal tradicional 🕯️</span>
                          <span>26%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-400 text-center italic">
                    Opina de forma totalmente segura y anónima. Tus respuestas no se asocian a datos reales.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Glowing CTA Button underneath the mockup */}
            <button
              onClick={() => {
                const element = document.getElementById('quick-entry-form-panel');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="mt-2 text-[10px] font-black uppercase tracking-widest text-white hover:text-rose-400 transition-all flex items-center gap-1 mx-auto"
            >
              <span>¡Me interesa! Ir al formulario de entrada</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

          </div>

        </div>
      </section>

      {/* USER REVIEWS / TESTIMONIALS */}
      <section className="bg-slate-900/20 border-y border-slate-900 py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto space-y-12 text-center">
          <div className="space-y-2 max-w-xl mx-auto">
            <span className="text-xs font-black text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 inline-block">
              Opiniones Reales
            </span>
            <h2 className="text-3xl font-black text-white">Comunidad Satisfecha</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Lo que dicen los usuarios anónimos que ingresan a través del Telegram oficial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-slate-900/40 border border-slate-800/80 p-5 rounded-2xl relative space-y-3 hover:border-slate-700 transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-2.5 h-2.5 rounded-full shadow-[0_0_8px_currentColor]" 
                      style={{ color: t.color }}
                    />
                    <span className="text-xs font-extrabold text-white font-mono">{t.alias}</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-bold">{t.country}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed italic">
                  &quot;{t.comment}&quot;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 px-4 max-w-4xl mx-auto z-10 relative">
        <div className="space-y-2 text-center mb-12">
          <span className="text-xs font-black text-purple-400 uppercase tracking-widest bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20 inline-block">
            Soporte & Dudas
          </span>
          <h2 className="text-3xl font-black text-white">Preguntas Frecuentes</h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            Respondemos todas tus dudas sobre privacidad, conexión y cómo sacarle el máximo provecho al portal.
          </p>
        </div>

        <div className="space-y-3 text-left">
          {faqs.map((f, idx) => (
            <div 
              key={idx} 
              className="bg-slate-900/30 border border-slate-900 rounded-2xl overflow-hidden transition-all duration-250"
            >
              <button
                type="button"
                onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between p-4 font-bold text-sm text-white hover:bg-slate-900/50 transition-all text-left cursor-pointer"
              >
                <span>{f.q}</span>
                <ChevronDown 
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${
                    expandedFaq === idx ? 'transform rotate-180 text-rose-400' : ''
                  }`} 
                />
              </button>
              
              <AnimatePresence initial={false}>
                {expandedFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-4 pb-4 pt-1 text-xs text-slate-400 leading-relaxed border-t border-slate-900/30">
                      {f.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CALL TO ACTION FOOTER */}
      <section className="bg-gradient-to-t from-slate-950 via-slate-950 to-slate-900/30 border-t border-slate-900 py-16 px-4 text-center z-10 relative">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-rose-500 via-pink-500 to-indigo-600 flex items-center justify-center text-white font-black text-2xl shadow-[0_0_30px_rgba(244,63,94,0.35)] mx-auto border border-rose-400/20">
            N
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
            ¿Listo para desvanecer los límites?
          </h2>
          <p className="text-xs md:text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
            Ingresa de forma temporal, 100% gratuita y segura ahora mismo. Tu próximo encuentro de video chat te espera.
          </p>

          <div className="pt-2">
            <button
              onClick={() => {
                const element = document.getElementById('quick-entry-form-panel');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-gradient-to-r from-rose-500 via-pink-500 to-indigo-600 text-white font-black py-3 px-8 rounded-xl cursor-pointer hover:shadow-xl hover:shadow-indigo-500/20 transition-all hover:scale-105 active:scale-95 uppercase text-xs tracking-widest inline-flex items-center gap-2"
            >
              <span>Generar mi Alias & Entrar</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
            </button>
          </div>

          <div className="pt-8 border-t border-slate-900 max-w-md mx-auto flex items-center justify-between text-[10px] text-slate-500">
            <span>© 2026 Nocturnal Portal Incógnito</span>
            <a href="https://t.me/nocturnalpos" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-all flex items-center gap-1">
              <span>Soporte Oficial</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

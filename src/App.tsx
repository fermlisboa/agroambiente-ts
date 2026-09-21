import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const differentiationItems = [
  {
    icon: 'biotech',
    title: 'Scientific Rigor',
    text: 'Our analysis goes beyond surface level. We leverage biometric data and laboratory-grade soil testing for every hectare.',
  },
  {
    icon: 'precision_manufacturing',
    title: 'Technological Edge',
    text: 'Proprietary GIS software and drone-integrated monitoring provide a resolution of data traditional consultants cannot match.',
  },
  {
    icon: 'balance',
    title: 'Sustainable Equilibrium',
    text: "We don't just protect the environment; we optimize it for long-term agricultural performance and asset value.",
  },
]

const partners = ['AGROCORP', 'BIO-LEAF', 'TERRA_CONSULT', 'ECO_GEN']

const specialists = [
  { name: 'Alice Lisboa', role: 'Strategic Planning' },
  { name: 'Aline Carvalho', role: 'GIS & Monitoring' },
  { name: 'Leticia Simoes', role: 'Legal Regularization' },
]

function LogoMark({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return <span className="material-symbols-outlined text-2xl text-secondary">eco</span>
  }

  return (
    <div className="h-8 w-8">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path
          clipRule="evenodd"
          d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
          fill="currentColor"
          fillRule="evenodd"
        />
      </svg>
    </div>
  )
}

function DesktopNav() {
  return (
    <nav className="hidden items-center gap-10 md:flex">
      <a className="text-sm font-medium text-on-surface-variant transition-colors hover:text-primary" href="#solutions">
        Solutions
      </a>
      <a className="text-sm font-medium text-on-surface-variant transition-colors hover:text-primary" href="#differentiation">
        Differentiation
      </a>
      <a className="text-sm font-medium text-on-surface-variant transition-colors hover:text-primary" href="#partners">
        Partners
      </a>
      <a className="text-sm font-medium text-on-surface-variant transition-colors hover:text-primary" href="#contact">
        Contact
      </a>
      <button className="rounded-full bg-primary px-6 py-2.5 text-sm font-bold tracking-wide text-on-primary transition-all active:scale-95">
        Get Started
      </button>
    </nav>
  )
}

function FooterDesktop() {
  return (
    <footer className="border-t border-surface-container bg-background py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
        <div className="flex items-center gap-3 text-primary opacity-50">
          <div className="h-6 w-6">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path
                clipRule="evenodd"
                d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
          </div>
          <h2 className="font-headline text-lg font-bold">AgroAmbiente</h2>
        </div>
        <p className="text-sm text-on-surface-variant">© 2024 AgroAmbiente Consultoria. All scientific records reserved.</p>
        <div className="flex gap-6">
          <a className="text-sm text-on-surface-variant hover:text-primary" href="#">
            Privacy Policy
          </a>
          <a className="text-sm text-on-surface-variant hover:text-primary" href="#">
            Technical Terms
          </a>
        </div>
      </div>
    </footer>
  )
}

function BottomMobileNav() {
  const navigate = useNavigate()

  return (
    <nav className="fixed bottom-0 left-0 z-50 flex w-full items-center justify-around rounded-t-3xl bg-[#f9faf5]/90 px-4 pb-6 pt-2 shadow-[0_-4px_40px_rgba(0,34,24,0.04)] backdrop-blur-lg md:hidden">
      <button
        className="flex scale-90 flex-col items-center justify-center rounded-[0.75rem_0.25rem_0.75rem_0.25rem] bg-[#d1e995] px-4 py-2 text-[#002218]"
        onClick={() => navigate('/')}
      >
        <span className="material-symbols-outlined text-xl material-filled">grid_view</span>
        <span className="mt-1 font-label text-[10px] font-semibold uppercase tracking-widest">Solutions</span>
      </button>
      <button className="flex flex-col items-center justify-center px-4 py-2 text-[#414845] hover:bg-[#edeee9]">
        <span className="material-symbols-outlined text-xl">psychology</span>
        <span className="mt-1 font-label text-[10px] font-semibold uppercase tracking-widest">Differentiation</span>
      </button>
      <button className="flex flex-col items-center justify-center px-4 py-2 text-[#414845] hover:bg-[#edeee9]">
        <span className="material-symbols-outlined text-xl">handshake</span>
        <span className="mt-1 font-label text-[10px] font-semibold uppercase tracking-widest">Partners</span>
      </button>
      <button className="flex flex-col items-center justify-center px-4 py-2 text-[#414845] hover:bg-[#edeee9]">
        <span className="material-symbols-outlined text-xl">mail</span>
        <span className="mt-1 font-label text-[10px] font-semibold uppercase tracking-widest">Contact</span>
      </button>
    </nav>
  )
}

function HomePageDesktop() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen">
      <header className="fixed left-0 top-0 z-50 w-full bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
          <div className="flex cursor-pointer items-center gap-3 text-primary" onClick={() => navigate('/mobile')}>
            <LogoMark />
            <h2 className="font-headline text-xl font-extrabold tracking-tight">AgroAmbiente</h2>
          </div>
          <DesktopNav />
        </div>
      </header>

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            alt="Green hills"
            className="h-full w-full scale-105 object-cover brightness-75"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ82EP6FuUBDMIIC3JHtjO4GmnRyD25cxPBIxwNALrnZsHj1LubOlhPGoo_kuRAv2YM1p5QW2WBrbXH_uSdtCDTwGxS1UMF72fEl8c8Vi0O5Yhx8NJULoW-Nlhp5t1YOf10FRDkBp9YoZfedDzYW3-zz6pSAXl4Nl8bDz9G1d1TV8Z3EjvXNYeK4WNJqL78P42pb9bEAWFZouT8zIXGN1xuI1TMEGqDr2lw7BXZTqhWffinO9SVqAtYXFGonXkG8qnX8RdBpjlamI"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-background" />
        </div>
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <span className="mb-8 inline-block rounded-full bg-secondary-container px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-on-secondary-container">
            The Ecological Ledger
          </span>
          <h1 className="mb-8 font-headline text-5xl font-black leading-[1.1] tracking-tighter text-white md:text-8xl">
            Precision Growth.
            <br />
            <span className="text-secondary-fixed">Rooted in Science.</span>
          </h1>
          <p className="mx-auto mb-12 max-w-2xl text-lg font-light leading-relaxed text-white/90 md:text-xl">
            Elevating environmental consulting through technical rigor and data-driven insights. We map the intersection of productivity and preservation.
          </p>
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <button className="w-full rounded-full bg-white px-10 py-5 font-bold text-primary transition-colors hover:bg-secondary-fixed sm:w-auto">
              Explore Our Ledger
            </button>
            <button className="w-full rounded-full border border-white/20 bg-primary/20 px-10 py-5 font-bold text-white backdrop-blur-md transition-colors hover:bg-white/10 sm:w-auto">
              Our Methodology
            </button>
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-32" id="solutions">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center md:text-left">
            <h2 className="mb-4 font-headline text-4xl font-black tracking-tight text-primary md:text-5xl">Strategic Solutions</h2>
            <p className="max-w-xl text-lg text-on-surface-variant">Integrated environmental intelligence for the modern agricultural landscape.</p>
          </div>
          <div className="grid h-auto grid-cols-1 gap-4 md:h-[800px] md:grid-cols-4 md:grid-rows-2">
            <div className="bento-item group relative overflow-hidden rounded-full md:col-span-2 md:row-span-2">
              <img
                alt="Agro Grid"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBC_vc8jWryawellsmAcOBYo4SyK41sYPrt020e3--zeKUUB1y596MF88pwj0xrHq4SsIYT2L9lKvQWaoAym_QF364C9LAJwdsmLv0kYDi3v2GAa-sPFYOhL1KtEhG0QoJ7_v4m_kbOhpl0PrlMVInD84yxAh-PHj1sgd1lZ_vUa6zxYqKhCAAqzqgGqYZRKiRIzae0LxczpgSNS5-KxcQXy9-VFq-2k0bdibukYAPU39OlQOEzL1jb_jC8yufyVj2FRDwsPpP6CAI"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-10">
                <span className="text-xs font-bold uppercase tracking-widest text-secondary-fixed-dim">Intelligence</span>
                <h3 className="mt-2 font-headline text-3xl font-bold text-white">Diagnostico de Area</h3>
                <p className="mt-4 max-w-md text-white/70">Comprehensive spatial analysis and soil vitality mapping using advanced GIS technology.</p>
                <div className="mt-8">
                  <span className="material-symbols-outlined text-4xl text-white">analytics</span>
                </div>
              </div>
            </div>

            <div className="bento-item group relative overflow-hidden rounded-full md:col-span-2 md:row-span-1">
              <img
                alt="Forest mist"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRMfXdcKmmZttyy2kpbF8Q6ZO7id3P_ivv7b3m1Rkb3P2CAn2uFSlgbpnNR4ap9Zd99NmMSUeHw-3dEf3PJcwBkAkIeenSYEhCHd9lS1sgrW7_DH_CxdgadtQTT_UIyWvfHcc6mwUZU4jP9dv8EamaWM-1721DH-5VeIIkJyeUd7RXamJLQJl015hH6oKOzymmNLJI40kB9D0W72ydtPD8TP5GSng2GIdgXTaYTYrw4KLb5g2p20hFj7WvSQ2qi6yQr6c4-w13NU"
              />
              <div className="absolute inset-0 bg-primary/40 transition-colors group-hover:bg-primary/20" />
              <div className="glass-card absolute inset-0 m-4 flex flex-col justify-end rounded-full border border-white/10 p-8">
                <h3 className="font-headline text-2xl font-bold text-white">Regularizacao Ambiental</h3>
                <p className="mt-2 text-sm text-white/80">Navigating complex legal frameworks with absolute precision.</p>
              </div>
            </div>

            <div className="bento-item group relative overflow-hidden rounded-full md:col-span-1 md:row-span-1">
              <img
                alt="Leaf close up"
                className="absolute inset-0 h-full w-full object-cover grayscale contrast-125"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDdvSnHd2iHbz0UuZh0Z-3bjBFiOoLEE3mzqE5bjpCPa_SPHoWEiUlwEUFt1UF4b_yeZ399oHV-Qw9Jc5F7nskUGFnThmSFjcJtKvDdryB6VnRn5ME4aGL1LzEcxzax8y1T_xFNHxaeALcxtrZkgVK3FEnNi-uGtv-DDDezF6h-Byhqupw1BupKbGPcTUrDtDZ5RS5NU3NCB3WZrb20mazaXyKeRg7_GDjpuducKWADG_iQfvngnNXxaUL5Wy63sCpvp0ewD-LT_4"
              />
              <div className="absolute inset-0 bg-secondary/80 mix-blend-multiply" />
              <div className="absolute inset-0 flex flex-col justify-between p-8">
                <div className="text-white/20">
                  <span className="material-symbols-outlined text-5xl">description</span>
                </div>
                <h3 className="font-headline text-xl font-bold text-white">Atualizacao do CAR</h3>
              </div>
            </div>

            <div className="bento-item relative overflow-hidden rounded-full bg-surface-container md:col-span-1 md:row-span-1">
              <div className="absolute inset-0 flex flex-col justify-between p-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <span className="material-symbols-outlined text-3xl text-primary">satellite_alt</span>
                </div>
                <div>
                  <h3 className="font-headline text-xl font-bold text-primary">Monitoramento</h3>
                  <p className="mt-1 text-sm text-on-surface-variant">Real-time reporting and asset oversight.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-surface-container-low py-32" id="differentiation">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center gap-20 lg:flex-row">
            <div className="lg:w-1/2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Excellence by Design</span>
              <h2 className="mb-8 mt-6 font-headline text-4xl font-black leading-tight text-primary md:text-5xl">Why The Ecological Ledger?</h2>
              <div className="space-y-12">
                {differentiationItems.map((item) => (
                  <div className="flex gap-6" key={item.title}>
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary text-white">
                      <span className="material-symbols-outlined">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-headline text-lg font-bold text-primary">{item.title}</h4>
                      <p className="mt-2 leading-relaxed text-on-surface-variant">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative lg:w-1/2">
              <div className="aspect-square overflow-hidden rounded-full border-[12px] border-surface shadow-2xl">
                <img
                  alt="Forest sun"
                  className="h-full w-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9vQDGKhaTTCtITCu7qC6rPInxUuZtt4enAhw0aZ6AEyCn5mw2LE7MFNs9RbFWG0dKSjs0hMb5BbEWBilYsjz3v3py-My1l9vd2IHhxkdQWDJ95r-YjkpP4_cMEQHHFWwayZspp8LLb2_yZfj1ZRHrC_sNNw_DEKZFsD3zuN-pvd8h7yK7xomm_HPBmFfHgRXFhplK-kWeK0IbPrfoQCnF16wM-tYDeTkXB9OIDGp47_2_3r2rfwgZDpyBAytA8RBbL5URzojZyRk"
                />
              </div>
              <div className="glass-card absolute -bottom-10 -left-10 max-w-xs rounded-full border border-white/20 bg-white p-8 shadow-xl">
                <p className="font-medium italic text-primary">"Technical precision and environmental stewardship are no longer mutually exclusive."</p>
                <p className="mt-4 text-sm font-bold text-secondary">- Dr. Henrique Soares</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24" id="partners">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h3 className="mb-16 font-headline text-sm font-bold uppercase tracking-[0.3em] text-on-surface-variant/50">Trusted Networks & Partners</h3>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-60 md:gap-24">
            {partners.map((name) => (
              <div className="flex items-center gap-3" key={name}>
                <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-surface-container">
                  <div className="h-full w-full bg-gray-200" />
                </div>
                <span className="font-bold tracking-tighter text-primary">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-primary py-32 text-white" id="contact">
        <div className="absolute right-0 top-0 h-full w-1/2 translate-x-1/3 skew-x-12 bg-secondary/10" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid gap-20 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 font-headline text-5xl font-black leading-tight">
                Ready to Map
                <br />
                Your Future?
              </h2>
              <p className="mb-12 max-w-md text-lg text-primary-fixed">Connect with our senior consultants to begin your property&apos;s ecological audit.</p>
              <div className="space-y-8">
                {specialists.map((person) => (
                  <div className="flex items-center gap-4" key={person.name}>
                    <div className="h-16 w-16 rounded-full border-2 border-secondary-fixed bg-gray-200" />
                    <div>
                      <p className="font-bold">{person.name}</p>
                      <p className="text-sm text-primary-fixed">{person.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur-xl">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-primary-fixed opacity-70">Full Name</label>
                    <input
                      className="w-full border-0 border-b border-white/20 bg-transparent px-0 text-white placeholder:text-white/20 focus:border-secondary-fixed focus:ring-0"
                      placeholder="Your Name"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-primary-fixed opacity-70">Company</label>
                    <input
                      className="w-full border-0 border-b border-white/20 bg-transparent px-0 text-white placeholder:text-white/20 focus:border-secondary-fixed focus:ring-0"
                      placeholder="Property Name"
                      type="text"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-primary-fixed opacity-70">Email Address</label>
                  <input
                    className="w-full border-0 border-b border-white/20 bg-transparent px-0 text-white placeholder:text-white/20 focus:border-secondary-fixed focus:ring-0"
                    placeholder="email@example.com"
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-primary-fixed opacity-70">Project Scope</label>
                  <textarea
                    className="w-full border-0 border-b border-white/20 bg-transparent px-0 text-white placeholder:text-white/20 focus:border-secondary-fixed focus:ring-0"
                    placeholder="Briefly describe your requirements..."
                    rows={4}
                  />
                </div>
                <button className="mt-4 w-full rounded-full bg-secondary py-5 text-sm font-black uppercase tracking-widest text-on-secondary transition-all hover:bg-secondary-fixed hover:text-primary">
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <FooterDesktop />
    </div>
  )
}

function MobileView() {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-screen flex-col pb-24">
      <header className="fixed top-0 z-50 w-full bg-[#f9faf5]/80 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between px-6 py-4">
          <div className="flex cursor-pointer items-center gap-2" onClick={() => navigate('/')}>
            <LogoMark compact />
            <span className="text-2xl font-bold tracking-tighter text-[#002218]">AgroAmbiente</span>
          </div>
          <button className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold uppercase tracking-wide text-on-primary transition-all active:scale-95">
            Started
          </button>
        </div>
      </header>

      <main className="flex-grow pt-20">
        <section className="relative overflow-hidden px-6 py-12">
          <div className="absolute inset-0 z-0">
            <div className="h-full w-full bg-gradient-to-br from-primary-container to-primary opacity-95" />
            <img
              alt="Forest mist"
              className="h-full w-full object-cover mix-blend-overlay"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAC6cAf3Lp7jSlC01IlEEwjbujQrI4pBzZSpDo-yCJIaPyHhYzTbHn24c7ADJicd51S0QZ87Aq4GLxjzlo1k82HjM0hp5OcQZuipIJcatlCmEwWxHMz-68LFH1MTrBwmsYCkLk6WFlSEUTG35hrQo9MNZRnJQXAuFogpZFLRRje3ma7n2HiQmbKSA27OMMO0EsmalscDvNjNusqbPFsm0Ft4HhE0beuKPxHI7AMoh85OGDrcZhNEKI5JDMHYcteNNqYAfMlYoO172c"
            />
          </div>
          <div className="relative z-10 space-y-6">
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 font-label text-xs uppercase tracking-widest text-on-primary-container">
              The Ecological Ledger
            </span>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-on-primary">
              Precision Growth.
              <br />
              Rooted in Science.
            </h1>
            <p className="max-w-md text-lg leading-relaxed text-on-primary-container">
              We redefine environmental consultancy through an empirical lens, balancing industrial progress.
            </p>
            <div className="flex flex-col gap-4 pt-4">
              <button className="rounded-xl bg-secondary-container py-4 text-center font-bold text-on-secondary-container transition-transform active:scale-95">
                Explore Our Ledger
              </button>
              <button className="rounded-xl border border-white/30 py-4 text-center font-semibold text-on-primary transition-colors active:bg-white/10">
                Our Methodology
              </button>
            </div>
          </div>
        </section>

        <section className="bg-surface px-6 py-16">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-bold text-primary">Strategic Solutions</h2>
            <div className="asymmetric-leaf mx-auto h-1 w-12 bg-secondary" />
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="group relative flex h-64 flex-col justify-end overflow-hidden rounded-full p-6">
              <img
                alt="Scientific Soil"
                className="absolute inset-0 h-full w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDY5cAx5Xu6mCIP4X6bPghO5H0HAVK0p9UewWbOcCZ1T9YpgJSgdOe1Ydueij1uD7aA85UWlb4tMs_VKdB11T6lnq0BSxvhOOrqoHw_LqrC8A9Ga1oCwDN_EtnB490Pdk0zpGKbpV8wlW9JWm8YK0220R5mbKTlD_YrNx5tuucsTdW2U4FWdjVtDOhRxdfeZyxqH8dpsYfDiXzPHDhva0HS2DTdmyfxJWhqgAsakFrdAGWlMN_XxnKsdyL6I27cgJKq4h9-ZFK3Lvg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent" />
              <div className="relative z-10">
                <span className="material-symbols-outlined mb-2 text-secondary-container">grid_view</span>
                <h3 className="text-xl font-bold text-on-primary">Area Diagnosis</h3>
                <p className="mt-1 text-sm text-on-primary-container">Empirical mapping of health.</p>
              </div>
            </div>
            <div className="glass-card-light asymmetric-leaf flex flex-col gap-3 border border-outline-variant/20 p-6">
              <span className="material-symbols-outlined text-3xl text-secondary">balance</span>
              <h3 className="text-lg font-bold text-primary">Environmental Regularization</h3>
              <p className="text-sm text-on-surface-variant">Navigating legal frameworks with scientific precision.</p>
            </div>
            <div className="asymmetric-leaf flex flex-col gap-3 bg-surface-container-low p-6">
              <span className="material-symbols-outlined text-3xl text-secondary">edit_note</span>
              <h3 className="text-lg font-bold text-primary">CAR Update</h3>
              <p className="text-sm text-on-surface-variant">Maintaining the Rural Registry with total accuracy.</p>
            </div>
            <div className="group relative h-48 overflow-hidden rounded-full p-6">
              <img
                alt="Forest Trail"
                className="absolute inset-0 h-full w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBz8hXJI07UH0_tnJV1IJit5_KnxJjiISZKqEU_L733PitJ8Wx1Xu-m5CZE6fW64VyIiBfwKFiBhj-CrylTq7lvKJPw0vsA_sTjb1zKDcF7SnJNdbYQMGbxzo0yPrCAF4IZc9Re4EFcRtXdqg5a-DMpGKHetNA4TrX6CTi6oM2OHIu_w4mZEFDI3ylruLBvLZkJq4Hp1PgkcUrDT44KqS9NyfP4bkHRvwbxNVIhg0Bq7X0kbQhAar1RpCrGsuMBBu2LTU_ai6_zppU"
              />
              <div className="absolute inset-0 bg-primary/40 backdrop-blur-sm" />
              <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
                <span className="material-symbols-outlined mb-2 text-4xl text-white">visibility</span>
                <h3 className="text-xl font-bold uppercase tracking-widest text-white">Monitoring</h3>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary px-6 py-12 text-on-primary">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="flex items-center gap-2">
            <LogoMark compact />
            <span className="text-lg font-bold">AgroAmbiente</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a className="text-xs uppercase tracking-widest text-outline-variant" href="#">
              Privacy
            </a>
            <a className="text-xs uppercase tracking-widest text-outline-variant" href="#">
              Terms
            </a>
            <a className="text-xs uppercase tracking-widest text-outline-variant" href="#">
              Impact
            </a>
          </div>
          <p className="mt-4 text-[10px] uppercase tracking-widest text-on-primary-container">© 2024 AgroAmbiente Consultoria.</p>
        </div>
      </footer>
      <BottomMobileNav />
    </div>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<HomePageDesktop />} path="/" />
        <Route element={<MobileView />} path="/mobile" />
      </Routes>
    </BrowserRouter>
  )
}

export default App

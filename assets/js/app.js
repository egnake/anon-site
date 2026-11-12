/**
 * ANON // RED TEAM OPSEC & ANTI-FORENSICS FRAMEWORK (v3.0.0)
 * Interactive Spatial 3D WebGL Configurator & Tactical Cryptographic Core
 * Author: Ege Parlak (egnake) // Production Pure Rust Suite
 * Built with Three.js (r128) & GSAP (3.12)
 * Architectural Paradigm: SOLID, Zero Slop, Viewport-Locked, Bilingual (EN/TR)
 */

(function () {
  'use strict';

  /* ==========================================================================
     01. BILINGUAL I18N DICTIONARY, DEPLOY RECIPES & REAL RUST REPO SPEC
     ========================================================================== */
  const I18N_DATA = {
    en: {
      topBrandSub: 'RED TEAM ANTI-FORENSICS & ATTRIBUTION EVASION',
      topSpecIndex: 'v3.0.0 — [NATIVE RUST // ZERO CRATES]',
      topSpecSub: '22 STATEFUL OPSEC MODULES // MIT LICENSE',
      statusLabel: 'STATUS:',
      statusValue: 'UNDETECTED',
      navArch: '01 / ARCHITECTURE',
      navCore: '02 / RUST CORE',
      navDeploy: '03 / CLI DEPLOY',
      navRepo: '04 / GITHUB REPO ↗',
      leftCaption: 'OPSEC ARCHITECTURE // 22 VECTORS',
      leftDesc: 'ZERO-DEPENDENCY RUST ENGINE BUILT FOR LINUX, KALI, WSL2, AND DOCKER TO NEUTRALIZE DIGITAL FOOTPRINTS & VOLATILE ARTIFACTS.',
      layerIdentity: 'IDENTITY',
      layerRouting: 'ROUTING',
      layerAntiforensics: 'ANTI-FORENSICS',
      layerDefense: 'DEFENSE',
      activeAssemblyLabel: 'ACTIVE ASSEMBLY:',
      rightMicroLabel: 'MODULE // KERNEL / SPECIFICATION',
      selectAtmosphere: 'SELECT ATMOSPHERE // POLARITY',
      selectTarget: 'SELECT TARGET // ENVIRONMENT',
      modulesAvailable: '22 MODULES + 6 PROFILES — [PURE RUST]',
      proceedDeploy: 'PROCEED TO DEPLOY',
      kineticCoreLabel: 'TESSERACT HARDWARE CORE:',
      spatialHint: 'DRAG TO ROTATE TESSERACT CORE // SELECT OPSEC VECTORS TO TRIGGER KINEMATIC ARTICULATION',
      mobileStageHint: 'SWIPE ABOVE TO ROTATE 3D CORE',
      soundOn: 'SYNTH ON',
      soundMuted: 'MUTED',
      portalConfirmTitle: 'CONFIRM DEPLOYMENT SEQUENCE',
      portalConfirmSub: 'SELECT VECTOR TO COMMIT ARMORED KINEMATICS',
      portalBack: 'BACK',
      portalConfigurator: 'CONFIGURATOR',
      portalDeploy: 'DEPLOY',
      portalExecute: 'EXECUTE ZERO TRACE',
      finaleRiskLabel: 'ATTRIBUTION RISK',
      finaleRiskSub: 'HEURISTIC CORRELATION: NEUTRALIZED',
      finaleDispersionLabel: 'TACTICAL MATRIX',
      finaleDispersionVal: '1,200 CHAFF NODES',
      finaleArtifactsLabel: 'CRATE FOOTPRINT',
      finaleArtifactsVal: '0 EXTERNAL CRATES',
      finaleBadge: 'RED TEAM OPSEC TOOLKIT // RUST v3.0.0',
      finaleHeadline: 'WELCOME\nTO ANON',
      finaleSubline: 'OPERATIONAL SECURITY & ANTI-FORENSICS FRAMEWORK BY EGNAKE',
      finaleParagraph: 'ANON is a zero-dependency Pure Rust operational security and anti-forensics suite engineered for Linux, Kali, Windows WSL2, and Docker red team engagements.',
      finaleCoreCite: 'Powered by 22 stateful OPSEC modules, 6 headless CLI profiles (`paranoia` to `ghost`), a live TUI dashboard, and an instant `--panic` kill-switch across 15 Rust files.',
      btnCopy: 'COPY',
      btnCopied: 'COPIED',
      btnStar: '★ STAR ON GITHUB',
      btnDownload: '⬇ DOWNLOAD v3.0.0 (.ZIP)',
      btnReturn: '↺ RETURN TO 3D CORE',
      specKicker: 'TECHNICAL SPECIFICATION // PURE RUST v3.0.0',
      specTitle: 'ANON RUST CORE ARCHITECTURE',
      specClose: '[ CLOSE ✕ ]',
      metaModules: 'STATEFUL MODULES',
      metaModulesVal: '22 MODULES + 5 UTILS',
      metaLoc: 'RUST CODEBASE',
      metaLocVal: '15 FILES // 8,200 LOC',
      metaCrates: 'EXTERNAL CRATES',
      metaCratesVal: '0 DEPENDENCIES (PURE STD)',
      metaProfiles: 'BUILD & PROFILES',
      metaProfilesVal: 'LTO + 0 WARN // 6 PRESETS',
      specProfilesLabel: 'HEADLESS PROFILES (--profile) & BUILT-IN UTILITIES',
      specFilesTitle: '15-FILE NATIVE RUST ARCHITECTURE'
    },
    tr: {
      topBrandSub: 'RED TEAM ANTİ-ADLİ ANALİZ & İZ ÖNLEME SİSTEMİ',
      topSpecIndex: 'v3.0.0 — [SAF RUST // HARİCİ CRATE YOK]',
      topSpecSub: '22 DURUMSAL OPSEC MODÜLÜ // MIT LİSANSI',
      statusLabel: 'DURUM:',
      statusValue: 'TESPİT EDİLEMEZ',
      navArch: '01 / MİMARİ',
      navCore: '02 / RUST ÇEKİRDEK',
      navDeploy: '03 / KURULUM & CLI',
      navRepo: '04 / GITHUB DEPOSU ↗',
      leftCaption: 'OPSEC MİMARİSİ // 22 VEKTÖR',
      leftDesc: 'DİJİTAL AYAK İZLERİNİ VE GEÇİCİ BELLEK İZLERİNİ SIFIRLAMAK İÇİN LINUX, KALI, WSL2 VE DOCKER ÜZERİNDE ÇALIŞAN SAF RUST MOTORU.',
      layerIdentity: 'KİMLİK',
      layerRouting: 'YÖNLENDİRME',
      layerAntiforensics: 'ANTİ-ADLİ',
      layerDefense: 'SAVUNMA',
      activeAssemblyLabel: 'AKTİF MONTAJ:',
      rightMicroLabel: 'MODÜL // ÇEKİRDEK / ÖZELLİK',
      selectAtmosphere: 'ATMOSFER SEÇİMİ // TEMA',
      selectTarget: 'HEDEF SEÇİMİ // ORTAM',
      modulesAvailable: '22 MODÜL + 6 PROFİL — [SAF RUST]',
      proceedDeploy: 'KURULUMU BAŞLAT',
      kineticCoreLabel: 'TESSERACT DONANIM ÇEKİRDEĞİ:',
      spatialHint: 'TESSERACT ÇEKİRDEĞİNİ DÖNDÜRMEK İÇİN SÜRÜKLEYİN // KİNEMATİK HAREKETİ TETİKLEMEK İÇİN VEKTÖRLERİ SEÇİN',
      mobileStageHint: '3B ÇEKİRDEĞİ DÖNDÜRMEK İÇİN KAYDIRIN',
      soundOn: 'AÇIK',
      soundMuted: 'SESSİZ',
      portalConfirmTitle: 'KURULUM SIRALAMASINI ONAYLA',
      portalConfirmSub: 'ZIRHLI KİNEMATİĞİ BAŞLATMAK İÇİN VEKTÖR SEÇİN',
      portalBack: 'GERİ',
      portalConfigurator: 'KONFİGÜRATÖR',
      portalDeploy: 'DAĞIT',
      portalExecute: 'SIFIR İZ İLE BAŞLAT',
      finaleRiskLabel: 'ATFEDİLME RİSKİ',
      finaleRiskSub: 'SEZGİSEL KORELASYON: ETKİSİZLEŞTİRİLDİ',
      finaleDispersionLabel: 'TAKTİK MATRİS',
      finaleDispersionVal: '1.200 YANILTICI DÜĞÜM',
      finaleArtifactsLabel: 'BAĞIMLILIK AYAK İZİ',
      finaleArtifactsVal: '0 HARİCİ CRATE',
      finaleBadge: 'RED TEAM OPSEC ARAÇ SETİ // RUST v3.0.0',
      finaleHeadline: "ANON'A\nHOŞ GELDİNİZ",
      finaleSubline: 'EGNAKE TARAFINDAN GELİŞTİRİLEN OPSEC & ANTİ-ADLİ ANALİZ ÇATISI',
      finaleParagraph: 'ANON; Linux, Kali, Windows WSL2 ve Docker Red Team operasyonlarında dijital ayak izlerini ve geçici adli izleri sıfırlayan bağımlılıksız saf Rust motorudur.',
      finaleCoreCite: '15 Rust çekirdek dosyası üzerinde 22 durumsal OPSEC modülü, 6 hazır CLI profili (`paranoia` - `ghost`), canlı TUI paneli ve anlık `--panic` acil kilitleme sunar.',
      btnCopy: 'KOPYALA',
      btnCopied: 'KOPYALANDI',
      btnStar: "★ GITHUB'DA YILDIZLA",
      btnDownload: '⬇ İNDİR v3.0.0 (.ZIP)',
      btnReturn: '↺ 3B ÇEKİRDEĞE DÖN',
      specKicker: 'TEKNİK ŞARTNAME // SAF RUST v3.0.0',
      specTitle: 'ANON RUST ÇEKİRDEK MİMARİSİ',
      specClose: '[ KAPAT ✕ ]',
      metaModules: 'DURUMSAL MODÜLLER',
      metaModulesVal: '22 MODÜL + 5 ARAÇ',
      metaLoc: 'RUST KOD TABANI',
      metaLocVal: '15 DOSYA // 8.200 SATIR',
      metaCrates: 'HARİCİ BAĞIMLILIK',
      metaCratesVal: '0 HARİCİ CRATE (SAF STD)',
      metaProfiles: 'DERLEME & PROFİLLER',
      metaProfilesVal: 'LTO + 0 UYARI // 6 PROFİL',
      specProfilesLabel: 'CLI PROFİLLERİ (--profile) & DAHİLİ ARAÇLAR',
      specFilesTitle: '15 DOSYALIK YEREL RUST MİMARİSİ'
    }
  };

  /* Real Install/Run Recipes Verified Against egnake/anon */
  const DEPLOY_RECIPES = {
    lnx: `git clone https://github.com/egnake/anon.git\ncd anon && sudo chmod +x setup.sh && sudo ./setup.sh\nsudo anon`,
    wsl2: `git clone https://github.com/egnake/anon.git\ncd anon && .\\setup.bat\nanon`,
    rust: `git clone https://github.com/egnake/anon.git && cd anon\nmake build && sudo make install\nsudo anon --profile ghost`,
    dkr: `git clone https://github.com/egnake/anon.git && cd anon\ndocker build -t anon .\ndocker run --rm -it --cap-add=NET_ADMIN --cap-add=SYS_ADMIN anon`
  };

  /* 15 Real Rust Repository Files in egnake/anon */
  const RUST_ARCHITECTURE_FILES = [
    {
      path: '01 // Cargo.toml',
      en: 'Zero-dependency Rust package manifest (edition 2021, LTO, opt-level = 3, strip = true, abort on panic).',
      tr: 'Sıfır harici bağımlılıklı Rust manifestosu (edition 2021, LTO, opt-level = 3, sembol temizleme).'
    },
    {
      path: '02 // src/main.rs',
      en: 'CLI entry point dispatching start/stop, headless profiles, JSON status/audit, browser sandbox, panic, and interactive TUI.',
      tr: 'Başlat/durdur, hazır profiller, JSON durum/denetim, güvenli tarayıcı, panik ve etkileşimli TUI yönlendiricisi.'
    },
    {
      path: '03 // src/config.rs',
      en: 'Core version constants, /usr/share/anon runtime paths, backup targets, and immutable environment configuration.',
      tr: 'Sürüm sabitleri, /usr/share/anon çalışma yolları, yedek hedefleri ve sabit ortam yapılandırması.'
    },
    {
      path: '04 // src/registry.rs',
      en: 'Canonical 22-module registry, deterministic start/stop ordering (EXEC_ORDER / STOP_ORDER), and 6 profile definitions.',
      tr: '22 modül sicili, deterministik başlatma/durdurma sıralaması (EXEC_ORDER / STOP_ORDER) ve 6 hazır profil tanımı.'
    },
    {
      path: '05 // src/state.rs',
      en: 'Persistent operational state engine tracking active modules cleanly across reboots and crash-recovery operations.',
      tr: 'Aktif modülleri oturumlar arasında kalıcı takip eden ve yedekten onarımı yöneten durum motoru.'
    },
    {
      path: '06 // src/sys.rs',
      en: 'Direct Linux syscall wrappers and low-level file/process/permission primitives without third-party crates.',
      tr: 'Üçüncü parti kütüphane olmadan doğrudan Linux sistem çağrısı ve düşük seviye süreç/dosya sarmalayıcıları.'
    },
    {
      path: '07 // src/helpers.rs',
      en: 'Command runner, Tor exit-node verification, dependency prover (dep_check), and IP/DNS diagnostic helpers.',
      tr: 'Komut yürütücü, Tor çıkış düğümü doğrulaması, bağımlılık denetçisi (dep_check) ve IP/DNS teşhis yardımcıları.'
    },
    {
      path: '08 // src/i18n.rs',
      en: 'Native runtime localization subsystem providing full English and Turkish CLI/TUI messaging.',
      tr: 'CLI ve TUI ekranları için tam Türkçe ve İngilizce mesajlaşma sağlayan yerel dil alt sistemi.'
    },
    {
      path: '09 // src/ui.rs',
      en: 'Zero-dependency ANSI terminal typography, status badges, color constants, and structured console rendering.',
      tr: 'Bağımlılıksız ANSI terminal tipografisi, durum etiketleri ve yapılandırılmış konsol çıktı katmanı.'
    },
    {
      path: '10 // src/tui.rs',
      en: 'Interactive keyboard-driven TUI menu, multi-profile launcher, and real-time operational monitoring dashboard.',
      tr: 'Klavye güdümlü etkileşimli TUI menüsü, çoklu profil başlatıcı ve gerçek zamanlı izleme paneli.'
    },
    {
      path: '11 // src/modules/mod.rs',
      en: 'Trait-based AnonModule dispatcher cleanly routing lifecycle calls (start/stop/is_live) to all 22 modules.',
      tr: 'Tüm 22 modülün yaşam döngüsü çağrılarını (start/stop/is_live) yönlendiren trait tabanlı dağıtıcı.'
    },
    {
      path: '12 // src/modules/network.rs',
      en: 'Tor iptables transparent routing, DNSCrypt/DoH Shield, obfs4 bridges, I2P daemon, ProxyChains, and MAC/DPI spoofing.',
      tr: 'Tor iptables şeffaf yönlendirme, DNSCrypt/DoH, obfs4 köprüleri, I2P, ProxyChains, DPI ve MAC değiştirici.'
    },
    {
      path: '13 // src/modules/obfuscation.rs',
      en: 'Timezone UTC locking, hostname cycling, OS sysctl spoofing, browser hardening, tmpfs execution, Firejail, and traffic chaff.',
      tr: 'UTC saat kilidi, hostname rotasyonu, OS sysctl gizleme, tarayıcı zırhlama, tmpfs üzerinde çalıştırma, Firejail ve trafik şaşırtma.'
    },
    {
      path: '14 // src/modules/defense.rs',
      en: 'Active iptables Kill-Switch, Anti-MITM ARP daemon, Bluetooth kill, volatile journald RAM logging, cold-boot wipe, and leak auditor.',
      tr: 'Aktif iptables Kill-Switch, Anti-MITM ARP servisi, Bluetooth kesici, geçici RAM loglama, cold-boot temizliği ve sızıntı denetimi.'
    },
    {
      path: '15 // src/modules/utils.rs',
      en: 'Emergency --panic wipe & halt, MAT2/ExifTool metadata scrubber, disposable browser launcher, backup restore, and self-update.',
      tr: 'Acil --panic imha ve durdurma, MAT2/ExifTool metaveri temizleyici, tek kullanımlık tarayıcı, yedek onarım ve güncelleme.'
    }
  ];

  /* All 22 Real Stateful OPSEC Modules Grouped Across 4 Interactive 3D Layers */
  const OPSEC_MODULES = [
    {
      id: 'identity',
      layerKey: 'layerIdentity',
      assemblyLabel: {
        en: 'ASSEMBLY 01 // STEALTH FACETED ARMOR PLATES',
        tr: 'MONTAJ 01 // AÇILI HAYALET ZIRH PLAKALARI'
      },
      count: '⁶',
      submodules: [
        {
          id: 'mac_changer',
          name: { en: 'MAC CHANGER', tr: 'MAC DEĞİŞTİRİCİ' },
          synopsis: {
            en: 'Randomizes physical NIC hardware addresses via macchanger before lease negotiation and restores originals cleanly on stop.',
            tr: 'DHCP kiralama sürecinden önce fiziksel ağ kartı MAC adreslerini rastgeleleştirir; durdurulduğunda orijinal donanım kimliğini geri yükler.'
          }
        },
        {
          id: 'hostname_changer',
          name: { en: 'HOSTNAME CHANGER', tr: 'DİNAMİK HOSTNAME' },
          synopsis: {
            en: 'Replaces the active system hostname and /etc/hosts identity with neutral aliases to break DHCP telemetry correlation.',
            tr: 'Ağ telemetri eşleştirmesini bozmak için aktif sistem adını ve /etc/hosts kimliğini rastgele takma adlarla değiştirir.'
          }
        },
        {
          id: 'timezone_changer',
          name: { en: 'TIMEZONE (UTC)', tr: 'ZAMAN DİLİMİ (UTC)' },
          synopsis: {
            en: 'Forces the OS timezone to Coordinated Universal Time (UTC), eliminating local geolocation hints from TLS and browser headers.',
            tr: 'Tarayıcı ve HTTP başlıklarından coğrafi konum sızmasını önlemek için sistem zaman dilimini UTC olarak sabitler.'
          }
        },
        {
          id: 'os_obfuscation',
          name: { en: 'OS OBFUSCATION', tr: 'SİSTEM İMZA GİZLEME' },
          synopsis: {
            en: 'Tunes Linux kernel network stack parameters (sysctl TTL and TCP fingerprint traits) against passive OS detection.',
            tr: 'Pasif işletim sistemi tespitine karşı Linux çekirdeği TCP/IP TTL ve ağ yığını parametrelerini maskeler.'
          }
        },
        {
          id: 'browser_anonymization',
          name: { en: 'BROWSER ANONYMITY', tr: 'TARAYICI ZIRHLAMA' },
          synopsis: {
            en: 'Applies hardened WebRTC/telemetry locks and routes Firefox/Chrome/Brave sessions through Tor SOCKS proxies cleanly.',
            tr: 'WebRTC ve telemetri sızıntılarını kapatarak tarayıcı oturumlarını izole Tor SOCKS vekil tünellerine kilitler.'
          }
        },
        {
          id: 'bluetooth_disabler',
          name: { en: 'BLUETOOTH KILL', tr: 'BLUETOOTH KAPATMA' },
          synopsis: {
            en: 'Disables Bluetooth controllers via rfkill and halts daemon broadcasting to prevent short-range wireless beacon tracking.',
            tr: 'Yakın mesafe BLE izlemesini engellemek için Bluetooth yongalarını rfkill ve servis düzeyinde devre dışı bırakır.'
          }
        }
      ]
    },
    {
      id: 'routing',
      layerKey: 'layerRouting',
      assemblyLabel: {
        en: 'ASSEMBLY 02 // 3-AXIS CNC GYROSCOPE GIMBALS',
        tr: 'MONTAJ 02 // 3 EKSENLİ CNC JİROSKOP HALKALARI'
      },
      count: '⁶',
      submodules: [
        {
          id: 'ip_changer',
          name: { en: 'TOR IP CHANGER', tr: 'TOR IP DEĞİŞTİRİCİ' },
          synopsis: {
            en: 'Routes all system TCP and DNS traffic transparently through Tor via iptables NAT chains with automatic state recovery.',
            tr: 'Sistemin tüm TCP ve DNS trafiğini iptables NAT kurallarıyla şeffaf biçimde Tor ağı üzerinden geçirir.'
          }
        },
        {
          id: 'dns_changer',
          name: { en: 'DNS / DNSCRYPT', tr: 'DNS / DNSCRYPT' },
          synopsis: {
            en: 'Locks /etc/resolv.conf with immutable safeguards and blocks NetworkManager DNS overrides to halt ISP resolution leaks.',
            tr: 'İSS DNS sızıntılarını önlemek için /etc/resolv.conf dosyasını kilitler ve NetworkManager müdahalesini engeller.'
          }
        },
        {
          id: 'doh_shield',
          name: { en: 'DOH SHIELD', tr: 'DOH KALKANI' },
          synopsis: {
            en: 'Enforces encrypted DNS-over-HTTPS resolution paths via dnscrypt-proxy so name queries blend into standard TLS streams.',
            tr: 'Alan adı sorgularını standart TLS akışları içine gizlemek için dnscrypt-proxy üzerinden şifreli DoH çözer.'
          }
        },
        {
          id: 'tor_bridges',
          name: { en: 'TOR BRIDGES (OBFS4)', tr: 'TOR KÖPRÜLERİ (OBFS4)' },
          synopsis: {
            en: 'Activates obfs4proxy and Snowflake pluggable transports to disguise Tor handshakes behind censorship-resistant relays.',
            tr: 'Sansür ve DPI engellerini aşmak için obfs4proxy ve Snowflake gizli köprü aktarımlarını yapılandırır.'
          }
        },
        {
          id: 'i2p_integration',
          name: { en: 'I2P GARLIC NET', tr: 'I2P GARLIC AĞI' },
          synopsis: {
            en: 'Orchestrates the i2pd router daemon to expose localized .i2p garlic-encrypted peer tunnels alongside Tor circuits.',
            tr: 'Tor devrelerine ek olarak şifreli .i2p tünelleri sağlayan i2pd yönlendirici servisini yönetir.'
          }
        },
        {
          id: 'proxychains_integration',
          name: { en: 'PROXYCHAINS', tr: 'PROXYCHAINS ZİNCİRİ' },
          synopsis: {
            en: 'Configures dynamic proxychains4 SOCKS5/HTTP relay chains for isolating individual CLI tools and payload utilities.',
            tr: 'Tekil komut satırı araçlarını ve tarama işlemlerini çok katmanlı SOCKS5/HTTP zincirlerinden geçirir.'
          }
        }
      ]
    },
    {
      id: 'antiforensics',
      layerKey: 'layerAntiforensics',
      assemblyLabel: {
        en: 'ASSEMBLY 03 // VOLATILE NAND BLADE ARRAY & LASER SCAN',
        tr: 'MONTAJ 03 // GEÇİCİ NAND BELLEK BLOKLARI & LAZER TARAYICI'
      },
      count: '⁵',
      submodules: [
        {
          id: 'anti_cold_boot',
          name: { en: 'ANTI-COLD-BOOT', tr: 'COLD-BOOT KORUMASI' },
          synopsis: {
            en: 'Disables swap partitions (swapoff) and drops kernel slab/page caches cleanly to reduce cold-boot memory artifact retention.',
            tr: 'Swap alanını devre dışı bırakır ve fiziksel bellek analiz riskini azaltmak için çekirdek önbelleklerini boşaltır.'
          }
        },
        {
          id: 'volatile_logging',
          name: { en: 'VOLATILE LOGGING', tr: 'GEÇİCİ RAM LOGLAMA' },
          synopsis: {
            en: 'Shifts journald log storage strictly into volatile RAM (Storage=volatile) so system traces disappear completely on halt.',
            tr: 'Sistem günlüklerinin diske yazılmasını durdurur ve journald kayıtlarını yalnızca geçici RAM üzerinde tutar.'
          }
        },
        {
          id: 'process_obfuscation',
          name: { en: 'PROCESS STEALTH', tr: 'SÜREÇ GİZLEME' },
          synopsis: {
            en: 'Hardens /proc visibility (hidepid=2) to shield active operator processes and arguments from unprivileged inspection.',
            tr: 'Yetkisiz kullanıcıların aktif süreçleri ve komut satırı parametrelerini görmesini /proc hidepid=2 ile engeller.'
          }
        },
        {
          id: 'execution_stealth',
          name: { en: 'RAM EXECUTION', tr: 'BELLEKTE ÇALIŞTIRMA (TMPFS)' },
          synopsis: {
            en: 'Clones and re-executes the native Rust binary inside stealth tmpfs mounts with ephemeral path cleanup upon termination.',
            tr: 'Derlenmiş Rust ikili dosyasını geçici tmpfs bellek alanında çalıştırır ve çıkışta çalışma izini siler.'
          }
        },
        {
          id: 'sandbox_isolation',
          name: { en: 'FIREJAIL SANDBOX', tr: 'SANDBOX İZOLASYONU' },
          synopsis: {
            en: 'Confines target browsers and untrusted binaries inside strict firejail profiles limiting filesystem and device access.',
            tr: 'Hedef tarayıcı ve yardımcı yazılımları katı dosya sistemi ve yetki sınırlarıyla firejail korumalı ortamında sınırlandırır.'
          }
        }
      ]
    },
    {
      id: 'defense',
      layerKey: 'layerDefense',
      assemblyLabel: {
        en: 'ASSEMBLY 04 // TACTICAL RADAR CHAFF & CAMOUFLAGE MATRIX',
        tr: 'MONTAJ 04 // TAKTİK RADAR ŞAŞIRTMA & KAMUFLAJ MATRİSİ'
      },
      count: '⁵',
      submodules: [
        {
          id: 'kill_switch',
          name: { en: 'IPTABLES KILL-SWITCH', tr: 'ACİL AĞ KESİCİ' },
          synopsis: {
            en: 'Locks outbound traffic with fail-closed iptables DROP policies, suppressing IPv6 traffic and accidental clearnet leaks.',
            tr: 'Dış ağ trafiğini varsayılan-kapalı (fail-closed) iptables kurallarıyla kilitleyerek IPv6 ve kazara açık ağ çıkışlarını keser.'
          }
        },
        {
          id: 'anti_mitm',
          name: { en: 'ANTI-MITM DAEMON', tr: 'ANTI-MITM SERVİSİ' },
          synopsis: {
            en: 'Monitors gateway ARP bindings asynchronously to flag spoofed MAC addresses and active LAN man-in-the-middle probes.',
            tr: 'Yerel ağ geçidi ARP tablosunu arka planda sürekli denetleyerek olası ARP zehirleme ve ortadaki adam (MITM) saldırılarını tespit eder.'
          }
        },
        {
          id: 'dpi_spoofing',
          name: { en: 'DPI SPOOFING', tr: 'DPI YANILTMA' },
          synopsis: {
            en: 'Alters packet TTL/MSS and TCP signatures in firewall chains to disrupt deep packet inspection heuristics.',
            tr: 'Derin Paket İnceleme (DPI) sistemlerini yanıltmak için güvenlik duvarı seviyesinde TTL/MSS ve TCP özelliklerini ayarlar.'
          }
        },
        {
          id: 'traffic_obfuscation',
          name: { en: 'TRAFFIC CHAFF', tr: 'TRAFİK KAMUFLAJI' },
          synopsis: {
            en: 'Dispatches randomized decoy HTTP/TLS traffic bursts asynchronously to mask idle intervals and statistical flow sizing.',
            tr: 'Zamanlama ve paket hacmi korelasyonunu bozmak için arka planda rastgele yanıltıcı trafik üretir.'
          }
        },
        {
          id: 'leak_auditor',
          name: { en: 'LEAK AUDITOR', tr: 'SIZINTI DENETÇİSİ' },
          synopsis: {
            en: 'Performs real-time exit-node, Tor check API, DNS, and IPv6 leakage audits with live JSON output and alert notifications.',
            tr: 'Çıkış IP adresini, Tor durumunu, DNS ve IPv6 sızıntılarını gerçek zamanlı denetler ve JSON/bildirim üretir.'
          }
        }
      ]
    }
  ];

  /* ==========================================================================
     02. AUDITORY SYNTHESIZER (WEB AUDIO API - PROCEDURAL MICRO-FEEDBACK)
     ========================================================================== */
  class SoundEngine {
    constructor() {
      this.ctx = null;
      this.enabled = true;
      this.initialized = false;
    }

    init() {
      if (this.initialized) return;
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          this.ctx = new AudioCtx();
          this.initialized = true;
        }
      } catch (e) {
        console.warn('AudioContext not supported:', e);
      }
    }

    toggle() {
      this.init();
      this.enabled = !this.enabled;
      return this.enabled;
    }

    playTick() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx || this.ctx.state !== 'running') return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1400, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(400, this.ctx.currentTime + 0.035);
      gain.gain.setValueAtTime(0.012, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.035);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.035);
    }

    playMechanicalRecoil() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx || this.ctx.state !== 'running') return;

      // Heavy CNC mechanical vault lock click
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.06);
      gain.gain.setValueAtTime(0.035, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.06);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.06);
    }

    playSelect() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx || this.ctx.state !== 'running') return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(480, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(960, this.ctx.currentTime + 0.07);
      gain.gain.setValueAtTime(0.025, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.07);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.07);
    }

    playAtmosphere() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx || this.ctx.state !== 'running') return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(160, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(520, this.ctx.currentTime + 0.2);
      gain.gain.setValueAtTime(0.035, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.2);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.2);
    }

    playDeploySurge() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx || this.ctx.state !== 'running') return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(90, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(40, this.ctx.currentTime + 0.75);
      gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.75);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.75);
    }
  }

  /* ==========================================================================
     03. BESPOKE RETICLE CURSOR CONTROLLER
     ========================================================================== */
  class CursorController {
    constructor(soundEngine) {
      this.sound = soundEngine;
      this.container = document.getElementById('reticle-cursor');
      if (!this.container) return;

      this.isTouchOnly = window.matchMedia && window.matchMedia('(hover: none) and (pointer: coarse)').matches;
      if (this.isTouchOnly) return;

      this.dot = this.container.querySelector('.cursor-dot');
      this.ring = this.container.querySelector('.cursor-ring');

      this.mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
      this.pos = { x: this.mouse.x, y: this.mouse.y };
      this.lerpFactor = 0.14;
      this.hasMoved = false;

      this.initEvents();
      this.render();
    }

    initEvents() {
      window.addEventListener('mousemove', (e) => {
        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;
        if (!this.hasMoved) {
          this.pos.x = e.clientX;
          this.pos.y = e.clientY;
          this.hasMoved = true;
          this.container.classList.add('visible');
        }
      }, { passive: true });

      document.addEventListener('mouseleave', () => {
        this.container.classList.remove('visible');
      });

      document.addEventListener('mouseenter', () => {
        if (this.hasMoved) {
          this.container.classList.add('visible');
        }
      });

      document.addEventListener('mouseover', (e) => {
        const target = e.target.closest('.magnetic-target, a, button, .layer-item, .submenu-item, .pill-round, .orb-clean, .portal-btn');
        if (target) {
          this.container.classList.add('hovering');
          this.sound.playTick();
        }
      });

      document.addEventListener('mouseout', (e) => {
        const target = e.target.closest('.magnetic-target, a, button, .layer-item, .submenu-item, .pill-round, .orb-clean, .portal-btn');
        if (target) {
          this.container.classList.remove('hovering');
        }
      });
    }

    render() {
      this.pos.x += (this.mouse.x - this.pos.x) * this.lerpFactor;
      this.pos.y += (this.mouse.y - this.pos.y) * this.lerpFactor;

      if (this.hasMoved) {
        this.dot.style.transform = `translate3d(${this.mouse.x}px, ${this.mouse.y}px, 0) translate(-50%, -50%)`;
        this.ring.style.transform = `translate3d(${this.pos.x}px, ${this.pos.y}px, 0) translate(-50%, -50%)`;
      }

      requestAnimationFrame(() => this.render());
    }
  }

  /* ==========================================================================
     04. LIVE GITHUB REPO TELEMETRY SERVICE
     ========================================================================== */
  class GitHubService {
    constructor() {
      this.starsEl = document.getElementById('gh-stars');
      this.forksEl = document.getElementById('gh-forks');
      this.downloadBtn = document.getElementById('btn-download-release');
      this.repoUrl = 'https://api.github.com/repos/egnake/anon';
      this.latestReleaseUrl = 'https://api.github.com/repos/egnake/anon/releases/latest';
    }

    async fetchStats() {
      try {
        const res = await fetch(this.repoUrl, {
          headers: { 'Accept': 'application/vnd.github.v3+json' }
        });
        if (!res.ok) throw new Error('API limit');
        const data = await res.json();
        this.updateUI(data.stargazers_count ?? 4, data.forks_count ?? 0);
      } catch (e) {
        this.updateUI(4, 0);
      }
      this.checkLatestReleaseAsset();
    }

    async checkLatestReleaseAsset() {
      if (!this.downloadBtn) return;
      try {
        const res = await fetch(this.latestReleaseUrl, {
          headers: { 'Accept': 'application/vnd.github.v3+json' }
        });
        if (!res.ok) return;
        const release = await res.json();
        const assets = Array.isArray(release.assets) ? release.assets : [];
        const debAsset = assets.find(a =>
          typeof a.name === 'string' &&
          a.name.endsWith('.deb') &&
          typeof a.browser_download_url === 'string' &&
          a.browser_download_url.startsWith('https://github.com/egnake/anon/releases/')
        );
        if (debAsset) {
          this.downloadBtn.href = debAsset.browser_download_url;
          this.downloadBtn.setAttribute('download', debAsset.name);
        }
      } catch (e) {
        // Keep verified v3.0.0 source zip href when no published release exists
      }
    }

    updateUI(stars, forks) {
      if (this.starsEl) this.starsEl.textContent = String(stars).padStart(2, '0');
      if (this.forksEl) this.forksEl.textContent = String(forks).padStart(2, '0');
    }
  }

  /* ==========================================================================
     05. NEW 3D ARCHITECTURE: "CRYPTOGRAPHIC TESSERACT & OPSEC HARDWARE CORE"
     Strictly bounded inside central safe zone (Radius <= 1.62, No UI overlap)
     ========================================================================== */
  class AnonCryptographicTesseract3D {
    constructor(container, soundEngine) {
      this.container = container;
      this.sound = soundEngine;

      this.scene = null;
      this.camera = null;
      this.renderer = null;

      // Master Core Group (Strictly Bounded)
      this.opsecCoreGroup = null;

      // Sub-Assembly A: Central Tesseract
      this.innerQuantumCube = null;
      this.cubeEdges = null;
      this.vaultCornerBlocks = [];
      this.cornerBasePositions = [];
      this.frameStruts = [];

      // Sub-Assembly B: 6 Stealth Armor Plates (Fingerprint)
      this.stealthPlatesGroup = null;
      this.stealthPlates = [];
      this.plateOpticSlits = [];
      this.plateBasePositions = [];

      // Sub-Assembly C: CNC Gyroscope Gimbals (Routing)
      this.gimbalsGroup = null;
      this.gimbalRings = [];
      this.gimbalPackets = [];

      // Sub-Assembly D: Memory Blades & Laser Scanner (Anti-Forensics)
      this.memoryArrayGroup = null;
      this.memoryBlades = [];
      this.bladeBasePositions = [];
      this.laserScannerRing = null;
      this.laserScanDirection = 1;

      // Sub-Assembly E: Tactical Radar Chaff (Obfuscation)
      this.tacticalMatrixGroup = null;
      this.chaffParticles = null;
      this.holoMatrixCage = null;

      // Lighting References
      this.ambientLight = null;
      this.rimLight = null;
      this.keyLight = null;
      this.pointLight1 = null;
      this.pointLight2 = null;

      // Parallax, Spring Drag & Mechanics
      this.hasWebGL = false;
      this.clock = typeof THREE !== 'undefined' ? new THREE.Clock() : null;
      this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
      this.isDragging = false;
      this.previousMouse = { x: 0, y: 0 };
      this.dragRotation = { x: 0, y: 0 };
      this.baseRotation = { x: 0.35, y: 0.45 };
      this.activeLayerIdx = 0;
      this.activeState = 1;

      if (this.initScene()) {
        this.hasWebGL = true;
        this.buildHardwareTesseract();
        this.applyResponsiveFraming(1, true);
        this.initInteractions();
        this.animate();
      } else {
        const stateEl = document.getElementById('core-state-indicator');
        if (stateEl) stateEl.textContent = 'HUD MODE // NO WEBGL';
      }
    }

    getViewportFraming(state = this.activeState) {
      const width = window.innerWidth;
      const height = Math.max(window.innerHeight, 1);
      const aspect = width / height;
      const isMobile = width <= 960;

      let camZ = width <= 1200 ? 8.8 : 8.1;
      if (isMobile) {
        camZ = Math.min(12.6, Math.max(8.8, 7.8 / Math.max(0.54, aspect)));
      }

      let coreX = 0;
      let coreY = 0;
      let coreScale = isMobile ? 0.70 : 0.92;

      if (state === 1 && isMobile) {
        const topbarEl = document.querySelector('.hud-topbar');
        const spacerEl = document.querySelector('.mobile-stage-spacer');
        const topbarH = topbarEl ? topbarEl.getBoundingClientRect().height : 96;
        const spacerH = spacerEl ? spacerEl.getBoundingClientRect().height : height * 0.35;
        const stageCenterPx = topbarH + spacerH * 0.44;
        const ndcY = 1 - (2 * stageCenterPx) / height;
        const halfH = camZ * Math.tan(THREE.MathUtils.degToRad(19));
        coreY = Math.min(1.85, Math.max(0.55, ndcY * halfH));
      } else if (state === 2 && isMobile) {
        coreScale = 0.74;
        const ndcY = 1 - (2 * (height * 0.46)) / height;
        const halfH = camZ * Math.tan(THREE.MathUtils.degToRad(19));
        coreY = Math.min(0.8, Math.max(-0.2, ndcY * halfH));
      } else if (state === 3) {
        coreX = isMobile ? 0 : 10.5;
        coreY = isMobile ? 8.5 : 0;
      }

      return { camZ, coreX, coreY, coreScale, isMobile };
    }

    applyResponsiveFraming(state = this.activeState, immediate = false) {
      if (!this.hasWebGL || !this.camera || !this.opsecCoreGroup) return;
      this.activeState = state;
      const { camZ, coreX, coreY, coreScale } = this.getViewportFraming(state);

      if (immediate) {
        this.camera.position.z = camZ;
        this.opsecCoreGroup.position.set(coreX, coreY, 0);
        this.opsecCoreGroup.scale.set(coreScale, coreScale, coreScale);
      } else {
        gsap.to(this.camera.position, { z: camZ, duration: 0.9, ease: 'power3.out' });
        gsap.to(this.opsecCoreGroup.position, { x: coreX, y: coreY, z: 0, duration: 1.0, ease: 'power3.inOut' });
        gsap.to(this.opsecCoreGroup.scale, { x: coreScale, y: coreScale, z: coreScale, duration: 0.9, ease: 'power3.inOut' });
      }
    }

    initScene() {
      if (typeof THREE === 'undefined' || !this.container) return false;
      this.scene = new THREE.Scene();

      const width = window.innerWidth;
      const height = window.innerHeight;
      // Precision camera placed at z = 7.5 to ensure strict central containment
      this.camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
      this.camera.position.set(0, 0, 7.5);

      try {
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
      } catch (e) {
        this.renderer = null;
        return false;
      }
      this.renderer.setSize(width, height);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      this.renderer.setClearColor(0x000000, 0);
      this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
      this.renderer.toneMappingExposure = 1.25;

      this.container.appendChild(this.renderer.domElement);

      // Studio Lighting Hierarchy
      this.ambientLight = new THREE.AmbientLight(0xdcdce0, 0.85);
      this.scene.add(this.ambientLight);

      this.rimLight = new THREE.DirectionalLight(0xffffff, 3.2);
      this.rimLight.position.set(-4, 5, -3);
      this.scene.add(this.rimLight);

      this.keyLight = new THREE.DirectionalLight(0xffffff, 2.6);
      this.keyLight.position.set(4, 4, 5);
      this.scene.add(this.keyLight);

      this.pointLight1 = new THREE.PointLight(0xff331f, 5.0, 12);
      this.pointLight1.position.set(0, 1.8, 2.2);
      this.scene.add(this.pointLight1);

      this.pointLight2 = new THREE.PointLight(0xff6b59, 3.0, 10);
      this.pointLight2.position.set(-3, -2, 2);
      this.scene.add(this.pointLight2);

      window.addEventListener('resize', () => this.onResize(), { passive: true });
      return true;
    }

    buildHardwareTesseract() {
      this.opsecCoreGroup = new THREE.Group();
      this.opsecCoreGroup.position.set(0, 0, 0);
      // Overall scale strictly constrained inside center column
      this.opsecCoreGroup.scale.set(0.95, 0.95, 0.95);
      this.scene.add(this.opsecCoreGroup);

      /* ----------------------------------------------------------------------
         SUB-ASSEMBLY A: CENTRAL CRYPTOGRAPHIC TESSERACT (INNER CORE)
         ---------------------------------------------------------------------- */
      // 1. Inner Quantum Cube (Diamond orientation)
      const innerCubeGeo = new THREE.BoxGeometry(0.85, 0.85, 0.85);
      this.innerCubeMat = new THREE.MeshPhysicalMaterial({
        color: 0x18181b,
        metalness: 0.95,
        roughness: 0.14,
        clearcoat: 1.0,
        clearcoatRoughness: 0.08,
        reflectivity: 0.95
      });
      this.innerQuantumCube = new THREE.Mesh(innerCubeGeo, this.innerCubeMat);
      this.innerQuantumCube.rotation.set(Math.PI / 4, Math.PI / 4, 0);
      this.opsecCoreGroup.add(this.innerQuantumCube);

      // Inner Wireframe Edges
      const innerEdgesGeo = new THREE.EdgesGeometry(innerCubeGeo);
      this.innerEdgeMat = new THREE.LineBasicMaterial({
        color: 0xff331f,
        transparent: true,
        opacity: 0.9
      });
      this.cubeEdges = new THREE.LineSegments(innerEdgesGeo, this.innerEdgeMat);
      this.innerQuantumCube.add(this.cubeEdges);

      // 2. Outer Tesseract Frame: 8 Heavy Machined Corner Vault Blocks
      const cornerGeo = new THREE.BoxGeometry(0.24, 0.24, 0.24);
      const cornerMat = new THREE.MeshPhysicalMaterial({
        color: 0x27272a,
        metalness: 0.92,
        roughness: 0.18,
        clearcoat: 0.85
      });

      const s = 0.65; // Base corner coordinate offset
      const signs = [
        [-1, -1, -1], [1, -1, -1], [-1, 1, -1], [1, 1, -1],
        [-1, -1, 1],  [1, -1, 1],  [-1, 1, 1],  [1, 1, 1]
      ];

      signs.forEach(sgn => {
        const block = new THREE.Mesh(cornerGeo, cornerMat);
        const bx = sgn[0] * s;
        const by = sgn[1] * s;
        const bz = sgn[2] * s;
        block.position.set(bx, by, bz);
        this.opsecCoreGroup.add(block);
        this.vaultCornerBlocks.push(block);
        this.cornerBasePositions.push(new THREE.Vector3(bx, by, bz));
      });

      // Thin Laser-etched connecting frame struts
      const strutGeo = new THREE.CylinderGeometry(0.012, 0.012, s * 2, 6);
      const strutMat = new THREE.MeshStandardMaterial({
        color: 0x52525b,
        metalness: 0.9,
        roughness: 0.2
      });

      const edges = [
        // 4 along X
        { pos: [0, -s, -s], rot: [0, 0, Math.PI / 2] },
        { pos: [0, s, -s], rot: [0, 0, Math.PI / 2] },
        { pos: [0, -s, s], rot: [0, 0, Math.PI / 2] },
        { pos: [0, s, s], rot: [0, 0, Math.PI / 2] },
        // 4 along Y
        { pos: [-s, 0, -s], rot: [0, 0, 0] },
        { pos: [s, 0, -s], rot: [0, 0, 0] },
        { pos: [-s, 0, s], rot: [0, 0, 0] },
        { pos: [s, 0, s], rot: [0, 0, 0] },
        // 4 along Z
        { pos: [-s, -s, 0], rot: [Math.PI / 2, 0, 0] },
        { pos: [s, -s, 0], rot: [Math.PI / 2, 0, 0] },
        { pos: [-s, s, 0], rot: [Math.PI / 2, 0, 0] },
        { pos: [s, s, 0], rot: [Math.PI / 2, 0, 0] }
      ];

      edges.forEach(e => {
        const strut = new THREE.Mesh(strutGeo, strutMat);
        strut.position.set(...e.pos);
        strut.rotation.set(...e.rot);
        this.opsecCoreGroup.add(strut);
        this.frameStruts.push(strut);
      });

      /* ----------------------------------------------------------------------
         SUB-ASSEMBLY B: 6 ANGULAR STEALTH ARMOR PLATES (01. FINGERPRINT)
         ---------------------------------------------------------------------- */
      this.stealthPlatesGroup = new THREE.Group();
      // Hexagonal faceted armor plates
      const plateGeo = new THREE.CylinderGeometry(0.44, 0.44, 0.05, 6);
      this.stealthPlateMat = new THREE.MeshPhysicalMaterial({
        color: 0x18181b,
        metalness: 0.96,
        roughness: 0.12,
        clearcoat: 1.0,
        flatShading: true
      });

      this.opticSlitMat = new THREE.MeshBasicMaterial({
        color: 0xff331f
      });

      const faceDist = 0.82;
      const faceConfigs = [
        { pos: [faceDist, 0, 0], rot: [0, 0, -Math.PI / 2] },
        { pos: [-faceDist, 0, 0], rot: [0, 0, Math.PI / 2] },
        { pos: [0, faceDist, 0], rot: [0, 0, 0] },
        { pos: [0, -faceDist, 0], rot: [Math.PI, 0, 0] },
        { pos: [0, 0, faceDist], rot: [Math.PI / 2, 0, 0] },
        { pos: [0, 0, -faceDist], rot: [-Math.PI / 2, 0, 0] }
      ];

      faceConfigs.forEach(cfg => {
        const plate = new THREE.Mesh(plateGeo, this.stealthPlateMat);
        plate.position.set(...cfg.pos);
        plate.rotation.set(...cfg.rot);
        this.stealthPlatesGroup.add(plate);
        this.stealthPlates.push(plate);
        this.plateBasePositions.push(new THREE.Vector3(...cfg.pos));

        // Optic Slit inside plate face
        const slit = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.28, 0.06), this.opticSlitMat);
        plate.add(slit);
        this.plateOpticSlits.push(slit);
      });

      this.opsecCoreGroup.add(this.stealthPlatesGroup);

      /* ----------------------------------------------------------------------
         SUB-ASSEMBLY C: PRECISION 3-AXIS CNC GIMBALS (02. ROUTING)
         Square-profile cross-section (radialSegments: 4), Max Radius 1.62
         ---------------------------------------------------------------------- */
      this.gimbalsGroup = new THREE.Group();
      this.gimbalMat = new THREE.MeshStandardMaterial({
        color: 0x71717a,
        metalness: 0.94,
        roughness: 0.16,
        transparent: true,
        opacity: 0.45
      });

      const gimbalRadii = [1.32, 1.46, 1.62];
      const gimbalRots = [
        [Math.PI / 4, 0, 0],
        [0, Math.PI / 3, Math.PI / 6],
        [-Math.PI / 3, Math.PI / 4, 0]
      ];

      gimbalRadii.forEach((r, idx) => {
        // radialSegments: 4 creates a sharp square/diamond cross section!
        const ringGeo = new THREE.TorusGeometry(r, 0.016, 4, 64);
        const ringMesh = new THREE.Mesh(ringGeo, this.gimbalMat);
        ringMesh.rotation.set(...gimbalRots[idx]);
        this.gimbalsGroup.add(ringMesh);
        this.gimbalRings.push(ringMesh);

        // High-speed data packet nodes orbiting each track
        const packetMat = new THREE.MeshBasicMaterial({ color: 0xff331f });
        const packetMesh = new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.045, 0.045), packetMat);
        this.gimbalsGroup.add(packetMesh);
        this.gimbalPackets.push({
          mesh: packetMesh,
          radius: r,
          rot: gimbalRots[idx],
          angle: idx * 2.1
        });
      });

      this.opsecCoreGroup.add(this.gimbalsGroup);

      /* ----------------------------------------------------------------------
         SUB-ASSEMBLY D: NAND/RAM MEMORY BLADE ARRAY & LASER SCANNER (03. ANTI-FORENSICS)
         ---------------------------------------------------------------------- */
      this.memoryArrayGroup = new THREE.Group();
      const bladeGeo = new THREE.BoxGeometry(0.035, 0.72, 0.22);
      this.bladeMat = new THREE.MeshPhysicalMaterial({
        color: 0x27272a,
        metalness: 0.92,
        roughness: 0.18,
        clearcoat: 0.9
      });

      const bladeCount = 12;
      for (let i = 0; i < bladeCount; i++) {
        const blade = new THREE.Mesh(bladeGeo, this.bladeMat);
        const angle = (i / bladeCount) * Math.PI * 2;
        const rad = 0.52;
        const bx = Math.cos(angle) * rad;
        const bz = Math.sin(angle) * rad;

        blade.position.set(bx, 0, bz);
        blade.rotation.y = -angle;
        this.memoryArrayGroup.add(blade);
        this.memoryBlades.push(blade);
        this.bladeBasePositions.push(new THREE.Vector3(bx, 0, bz));
      }

      // Horizontal Laser Sanitizer Ring
      const scannerGeo = new THREE.TorusGeometry(0.92, 0.008, 4, 48);
      this.scannerMat = new THREE.MeshBasicMaterial({
        color: 0xff331f,
        transparent: true,
        opacity: 0.85
      });
      this.laserScannerRing = new THREE.Mesh(scannerGeo, this.scannerMat);
      this.laserScannerRing.rotation.x = Math.PI / 2;
      this.memoryArrayGroup.add(this.laserScannerRing);

      this.opsecCoreGroup.add(this.memoryArrayGroup);

      /* ----------------------------------------------------------------------
         SUB-ASSEMBLY E: TACTICAL RADAR CHAFF & STEALTH MATRIX (04. OBFUSCATION)
         Fine micro-crosshairs / points strictly bounded within radius 1.7
         ---------------------------------------------------------------------- */
      this.tacticalMatrixGroup = new THREE.Group();
      const chaffCount = 1200;
      const chaffGeo = new THREE.BufferGeometry();
      const chaffPos = new Float32Array(chaffCount * 3);

      for (let i = 0; i < chaffCount; i++) {
        const rad = 0.7 + (Math.random() * 0.95); // Strictly bounded <= 1.65
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos((Math.random() * 2) - 1);

        chaffPos[i * 3 + 0] = rad * Math.sin(phi) * Math.cos(theta);
        chaffPos[i * 3 + 1] = rad * Math.sin(phi) * Math.sin(theta);
        chaffPos[i * 3 + 2] = rad * Math.cos(phi);
      }
      chaffGeo.setAttribute('position', new THREE.BufferAttribute(chaffPos, 3));

      this.chaffMat = new THREE.PointsMaterial({
        size: 0.024,
        color: 0xff331f,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending
      });
      this.chaffParticles = new THREE.Points(chaffGeo, this.chaffMat);
      this.tacticalMatrixGroup.add(this.chaffParticles);

      // Holographic wireframe cage
      const holoGeo = new THREE.OctahedronGeometry(1.58, 1);
      const holoEdges = new THREE.EdgesGeometry(holoGeo);
      this.holoMat = new THREE.LineBasicMaterial({
        color: 0xff331f,
        transparent: true,
        opacity: 0.15
      });
      this.holoMatrixCage = new THREE.LineSegments(holoEdges, this.holoMat);
      this.tacticalMatrixGroup.add(this.holoMatrixCage);

      this.opsecCoreGroup.add(this.tacticalMatrixGroup);
    }

    initInteractions() {
      // Parallax mouse movements
      window.addEventListener('mousemove', (e) => {
        this.mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 2.0;
        this.mouse.targetY = -(e.clientY / window.innerHeight - 0.5) * 2.0;

        if (this.isDragging) {
          const deltaX = e.clientX - this.previousMouse.x;
          const deltaY = e.clientY - this.previousMouse.y;
          this.dragRotation.y += deltaX * 0.006;
          this.dragRotation.x += deltaY * 0.006;
          this.previousMouse = { x: e.clientX, y: e.clientY };
        }
      }, { passive: true });

      // Direct Drag Rotation with Elastic Spring Return
      window.addEventListener('mousedown', (e) => {
        if (e.target.closest('.hud-wrapper') && !e.target.closest('#webgl-container')) {
          if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || e.target.closest('.magnetic-target')) return;
        }
        this.isDragging = true;
        this.previousMouse = { x: e.clientX, y: e.clientY };
      });

      const releaseDrag = () => {
        if (!this.isDragging) return;
        this.isDragging = false;
        gsap.to(this.dragRotation, {
          x: 0,
          y: 0,
          duration: 1.1,
          ease: 'elastic.out(1, 0.5)'
        });
      };

      window.addEventListener('mouseup', releaseDrag);

      // Mobile / Tablet Touch Rotation Inside 3D Stage
      let touchActive = false;
      window.addEventListener('touchstart', (e) => {
        if (e.touches.length !== 1) return;
        const onInteractiveHUD = e.target.closest('.left-inspector, .right-inspector, .hud-topbar, .hud-bottombar, .deployment-finale, .spec-modal, button, a');
        if (onInteractiveHUD) return;
        touchActive = true;
        this.isDragging = true;
        this.previousMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }, { passive: true });

      window.addEventListener('touchmove', (e) => {
        if (!touchActive || e.touches.length !== 1) return;
        const t = e.touches[0];
        const deltaX = t.clientX - this.previousMouse.x;
        const deltaY = t.clientY - this.previousMouse.y;
        this.dragRotation.y += deltaX * 0.009;
        this.dragRotation.x += deltaY * 0.005;
        this.previousMouse = { x: t.clientX, y: t.clientY };
      }, { passive: true });

      const endTouch = () => {
        if (!touchActive) return;
        touchActive = false;
        releaseDrag();
      };
      window.addEventListener('touchend', endTouch, { passive: true });
      window.addEventListener('touchcancel', endTouch, { passive: true });
    }

    onResize() {
      const width = window.innerWidth;
      const height = Math.max(window.innerHeight, 1);
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height);
      this.applyResponsiveFraming(this.activeState, true);
    }

    // Kinematic Articulation on 4 Primary OPSEC Layers
    setLayer(layerIdx) {
      if (!this.hasWebGL || !this.opsecCoreGroup) return;
      this.activeLayerIdx = layerIdx;
      const duration = 1.1;
      const ease = 'power3.inOut';

      // Isometric inspection angles
      const angles = [
        { rotY: 0.35, rotX: 0.4 },              // Layer 0: FINGERPRINT (Faceted armor view)
        { rotY: Math.PI * 0.45, rotX: -0.22 },  // Layer 1: ROUTING (CNC Gimbals view)
        { rotY: -Math.PI * 0.32, rotX: 0.28 },  // Layer 2: ANTI-FORENSICS (Memory blade view)
        { rotY: Math.PI * 0.8, rotX: 0.12 }    // Layer 3: OBFUSCATION (Chaff matrix view)
      ];

      const target = angles[layerIdx] || angles[0];
      this.baseRotation.x = target.rotX;
      this.baseRotation.y = target.rotY;

      gsap.to(this.opsecCoreGroup.rotation, {
        x: target.rotX,
        y: target.rotY,
        duration: duration,
        ease: ease
      });

      // Layer 01: Stealth Armor Plates Ejection & Optic Slit Reveal
      const isArmor = layerIdx === 0;
      this.stealthPlates.forEach((p, idx) => {
        const base = this.plateBasePositions[idx];
        const targetDist = isArmor ? 1.18 : 1.0;
        gsap.to(p.position, {
          x: base.x * targetDist,
          y: base.y * targetDist,
          z: base.z * targetDist,
          duration: duration,
          ease: 'back.out(1.8)'
        });
        gsap.to(p.rotation, {
          z: isArmor ? Math.PI / 3 : 0,
          duration: duration,
          ease: ease
        });
      });

      // Layer 02: CNC Gyroscope Gimbals Acceleration & Opacity
      const isRouting = layerIdx === 1;
      gsap.to(this.gimbalMat, {
        opacity: isRouting ? 0.9 : 0.25,
        duration: duration,
        ease: ease
      });

      // Layer 03: RAM Blades Radial Ejection Wave
      const isMemory = layerIdx === 2;
      this.memoryBlades.forEach((blade, idx) => {
        const base = this.bladeBasePositions[idx];
        const factor = isMemory ? 1.55 : 1.0;
        gsap.to(blade.position, {
          x: base.x * factor,
          z: base.z * factor,
          duration: duration,
          delay: idx * 0.02,
          ease: 'back.out(2.0)'
        });
      });
      gsap.to(this.scannerMat, {
        opacity: isMemory ? 1.0 : 0.3,
        duration: duration,
        ease: ease
      });

      // Layer 04: Camouflage Wireframe Phasing & Radar Chaff
      const isObfuscation = layerIdx === 3;
      this.stealthPlateMat.wireframe = isObfuscation;
      this.stealthPlateMat.needsUpdate = true;
      gsap.to(this.chaffMat, {
        size: isObfuscation ? 0.045 : 0.024,
        opacity: isObfuscation ? 0.95 : 0.4,
        duration: duration,
        ease: ease
      });
      gsap.to(this.holoMat, {
        opacity: isObfuscation ? 0.55 : 0.15,
        duration: duration,
        ease: ease
      });
    }

    // Sub-Module Mechanical Recoil / Re-Calibration Pulse
    triggerSubmoduleRecoil(submoduleIdx) {
      this.sound.playMechanicalRecoil();
      if (!this.hasWebGL || !this.opsecCoreGroup) return;

      // 8 Corner Vault Blocks Snap Inward then Lock Outward
      const recoilTimeline = gsap.timeline();
      
      this.vaultCornerBlocks.forEach((block, idx) => {
        const base = this.cornerBasePositions[idx];
        // Snap inward
        recoilTimeline.to(block.position, {
          x: base.x * 0.82,
          y: base.y * 0.82,
          z: base.z * 0.82,
          duration: 0.12,
          ease: 'power2.in'
        }, 0);
        // Vault lock outward
        recoilTimeline.to(block.position, {
          x: base.x * 1.15,
          y: base.y * 1.15,
          z: base.z * 1.15,
          duration: 0.4,
          ease: 'back.out(2.2)'
        }, 0.12);
        // Settle
        recoilTimeline.to(block.position, {
          x: base.x,
          y: base.y,
          z: base.z,
          duration: 0.3,
          ease: 'power2.out'
        }, 0.52);
      });

      // Camera Micro-recoil
      const camShift = (submoduleIdx % 2 === 0 ? 0.15 : -0.15);
      gsap.to(this.camera.position, {
        x: camShift,
        y: (submoduleIdx * 0.03),
        duration: 0.3,
        ease: 'power2.out',
        onComplete: () => {
          gsap.to(this.camera.position, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'power2.out'
          });
        }
      });
    }

    // Dynamic Atmosphere Theme Synchronizer
    setAtmosphere(themeKey) {
      if (!this.hasWebGL) return;
      if (themeKey === 'titanium') {
        // TITANIUM (Anodized light gray + Signal Orange)
        gsap.to(this.ambientLight.color, { r: 0.86, g: 0.86, b: 0.88, duration: 0.6 });
        gsap.to(this.rimLight.color, { r: 1.0, g: 1.0, b: 1.0, duration: 0.6 });
        gsap.to(this.keyLight.color, { r: 1.0, g: 1.0, b: 1.0, duration: 0.6 });
        gsap.to(this.pointLight1.color, { r: 1.0, g: 0.2, b: 0.12, duration: 0.6 }); // #FF331F
        gsap.to(this.pointLight2.color, { r: 1.0, g: 0.42, b: 0.35, duration: 0.6 });

        this.innerEdgeMat.color.setHex(0xff331f);
        this.opticSlitMat.color.setHex(0xff331f);
        this.scannerMat.color.setHex(0xff331f);
        this.chaffMat.color.setHex(0xff331f);
        this.holoMat.color.setHex(0xff331f);

        this.innerCubeMat.color.setHex(0x18181b);
        this.stealthPlateMat.color.setHex(0x18181b);

      } else if (themeKey === 'obsidian') {
        // OBSIDIAN (Vantablack + Electric Ultraviolet / Cyber Cyan)
        gsap.to(this.ambientLight.color, { r: 0.12, g: 0.12, b: 0.18, duration: 0.6 });
        gsap.to(this.rimLight.color, { r: 0.54, g: 0.36, b: 0.96, duration: 0.6 }); // #8B5CF6
        gsap.to(this.keyLight.color, { r: 0.0, g: 0.94, b: 1.0, duration: 0.6 });  // #00F0FF
        gsap.to(this.pointLight1.color, { r: 0.54, g: 0.36, b: 0.96, duration: 0.6 });
        gsap.to(this.pointLight2.color, { r: 0.0, g: 0.94, b: 1.0, duration: 0.6 });

        this.innerEdgeMat.color.setHex(0x00f0ff);
        this.opticSlitMat.color.setHex(0x00f0ff);
        this.scannerMat.color.setHex(0x8b5cf6);
        this.chaffMat.color.setHex(0x8b5cf6);
        this.holoMat.color.setHex(0x00f0ff);

        this.innerCubeMat.color.setHex(0x09090c);
        this.stealthPlateMat.color.setHex(0x09090c);

      } else if (themeKey === 'cobalt') {
        // COBALT LAB (Tactical Blueprint + Surgical Emerald)
        gsap.to(this.ambientLight.color, { r: 0.08, g: 0.14, b: 0.18, duration: 0.6 });
        gsap.to(this.rimLight.color, { r: 0.06, g: 0.72, b: 0.5, duration: 0.6 });  // #10B981
        gsap.to(this.keyLight.color, { r: 0.88, g: 0.92, b: 0.95, duration: 0.6 });
        gsap.to(this.pointLight1.color, { r: 0.06, g: 0.72, b: 0.5, duration: 0.6 });
        gsap.to(this.pointLight2.color, { r: 0.2, g: 0.82, b: 0.6, duration: 0.6 });

        this.innerEdgeMat.color.setHex(0x10b981);
        this.opticSlitMat.color.setHex(0x10b981);
        this.scannerMat.color.setHex(0x10b981);
        this.chaffMat.color.setHex(0x10b981);
        this.holoMat.color.setHex(0x10b981);

        this.innerCubeMat.color.setHex(0x070a0e);
        this.stealthPlateMat.color.setHex(0x0f172a);
      }
    }

    animate() {
      requestAnimationFrame(() => this.animate());

      const delta = this.clock.getDelta();
      const elapsed = this.clock.getElapsedTime();

      // Mouse Parallax Lerping
      this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.05;
      this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.05;

      this.camera.position.x = this.mouse.x * 0.25;
      this.camera.position.y = this.mouse.y * 0.2;
      this.camera.lookAt(0, 0, 0);

      // Autonomous Hardware Motion
      if (this.innerQuantumCube) {
        this.innerQuantumCube.rotation.x += delta * 0.25;
        this.innerQuantumCube.rotation.y += delta * 0.35;
      }

      // CNC Gimbals Continuous Rotation & Node Tracking
      if (this.gimbalsGroup) {
        this.gimbalRings[0].rotation.z += delta * 0.22;
        this.gimbalRings[1].rotation.x += delta * 0.28;
        this.gimbalRings[2].rotation.y += delta * 0.18;

        this.gimbalPackets.forEach(p => {
          p.angle += delta * 2.2;
          const px = p.radius * Math.cos(p.angle);
          const py = p.radius * Math.sin(p.angle);
          p.mesh.position.set(px, py, 0);
          p.mesh.position.applyEuler(new THREE.Euler(...p.rot));
        });
      }

      // Vertical Laser Scanner Sweep (y: -0.55 to +0.55)
      if (this.laserScannerRing) {
        this.laserScannerRing.position.y += delta * 0.85 * this.laserScanDirection;
        if (this.laserScannerRing.position.y > 0.55) {
          this.laserScannerRing.position.y = 0.55;
          this.laserScanDirection = -1;
        } else if (this.laserScannerRing.position.y < -0.55) {
          this.laserScannerRing.position.y = -0.55;
          this.laserScanDirection = 1;
        }
      }

      // Radar Chaff & Hologram Matrix Drift
      if (this.chaffParticles) {
        this.chaffParticles.rotation.y += delta * 0.08;
      }
      if (this.holoMatrixCage) {
        this.holoMatrixCage.rotation.y -= delta * 0.05;
      }

      // Interactive Drag Rotation
      if (this.isDragging) {
        this.opsecCoreGroup.rotation.y = this.baseRotation.y + this.dragRotation.y;
        this.opsecCoreGroup.rotation.x = this.baseRotation.x + this.dragRotation.x;
      }

      this.renderer.render(this.scene, this.camera);
    }
  }

  /* ==========================================================================
     06. CONFIGURATOR UI CONTROLLER (STATE 1 - ZERO-BOX ELEGANCE)
     ========================================================================== */
  class ConfiguratorUI {
    constructor(tesseract3D, soundEngine, i18nManager) {
      this.core = tesseract3D;
      this.sound = soundEngine;
      this.i18n = i18nManager;

      this.currentLayerIdx = 0;
      this.currentSubmoduleIdx = 0;
      this.activeTheme = 'titanium';
      this.activeEnv = 'lnx';
      this.envSubscribers = [];

      // DOM Elements
      this.layerItems = document.querySelectorAll('#primary-layer-list .layer-item');
      this.submenuWrapper = document.getElementById('secondary-submenu');
      this.assemblyLabel = document.getElementById('active-assembly-label');
      this.assemblyProgress = document.getElementById('assembly-progress');

      this.headlineEl = document.getElementById('module-headline');
      this.synopsisEl = document.getElementById('module-synopsis');

      this.themeOrbs = document.querySelectorAll('.orb-clean');
      this.targetPills = document.querySelectorAll('.pill-round');

      this.initEvents();
      this.renderLayer(0, 0, true);
    }

    onEnvChange(fn) {
      this.envSubscribers.push(fn);
    }

    setEnvironment(envKey) {
      if (!DEPLOY_RECIPES[envKey]) return;
      this.activeEnv = envKey;
      this.targetPills.forEach(p => {
        p.classList.toggle('active', p.dataset.env === envKey);
      });
      this.envSubscribers.forEach(fn => fn(envKey));
    }

    initEvents() {
      // Primary Layer Selection
      this.layerItems.forEach((item, idx) => {
        item.addEventListener('click', () => {
          if (this.currentLayerIdx === idx) return;
          this.sound.playSelect();
          this.renderLayer(idx, 0);
          this.core.setLayer(idx);
        });
      });

      // Atmosphere Orb Selection
      this.themeOrbs.forEach(btn => {
        btn.addEventListener('click', () => {
          const theme = btn.dataset.theme;
          if (this.activeTheme === theme) return;
          this.sound.playAtmosphere();
          this.setTheme(theme);
        });
      });

      // Single-Active Target Environment Pill (Synced with State 3 Deploy Terminal)
      this.targetPills.forEach(pill => {
        pill.addEventListener('click', () => {
          const envKey = pill.dataset.env;
          if (!envKey || this.activeEnv === envKey) return;
          this.sound.playTick();
          this.setEnvironment(envKey);
        });
      });
    }

    renderLayer(layerIdx, submoduleIdx = 0, immediate = false) {
      this.currentLayerIdx = layerIdx;
      this.currentSubmoduleIdx = submoduleIdx;

      this.layerItems.forEach((el, idx) => {
        el.classList.toggle('active', idx === layerIdx);
      });

      const currentLayer = OPSEC_MODULES[layerIdx];
      const lang = this.i18n.currentLang;

      if (this.assemblyLabel) {
        this.assemblyLabel.textContent = currentLayer.assemblyLabel[lang];
      }
      if (this.assemblyProgress) {
        this.assemblyProgress.style.width = `${((layerIdx + 1) / OPSEC_MODULES.length) * 100}%`;
      }

      // Render Secondary Submenu items safely without innerHTML string injection
      this.submenuWrapper.replaceChildren();
      currentLayer.submodules.forEach((sub, sIdx) => {
        const item = document.createElement('button');
        item.type = 'button';
        item.className = `submenu-item magnetic-target ${sIdx === submoduleIdx ? 'active' : ''}`;

        const line = document.createElement('span');
        line.className = 'submenu-indicator-line';

        const label = document.createElement('span');
        label.textContent = sub.name[lang];

        item.appendChild(line);
        item.appendChild(label);

        item.addEventListener('click', () => {
          this.selectSubmodule(sIdx);
        });

        this.submenuWrapper.appendChild(item);
      });

      if (!immediate) {
        gsap.fromTo(this.submenuWrapper.children,
          { opacity: 0, x: -8 },
          { opacity: 1, x: 0, duration: 0.35, stagger: 0.05, ease: 'power2.out' }
        );
      }

      this.renderSubmoduleDetails(currentLayer.submodules[submoduleIdx], immediate);
    }

    selectSubmodule(submoduleIdx) {
      this.currentSubmoduleIdx = submoduleIdx;
      const subItems = this.submenuWrapper.querySelectorAll('.submenu-item');
      subItems.forEach((el, idx) => {
        el.classList.toggle('active', idx === submoduleIdx);
      });

      const currentSub = OPSEC_MODULES[this.currentLayerIdx].submodules[submoduleIdx];
      this.renderSubmoduleDetails(currentSub);

      // Trigger 3D Mechanical Vault Recoil / Re-Calibration on Sub-module click
      this.core.triggerSubmoduleRecoil(submoduleIdx);
    }

    renderSubmoduleDetails(sub, immediate = false) {
      const lang = this.i18n.currentLang;
      if (immediate) {
        gsap.killTweensOf([this.headlineEl, this.synopsisEl]);
        this.headlineEl.textContent = sub.name[lang];
        this.synopsisEl.textContent = sub.synopsis[lang];
        gsap.set([this.headlineEl, this.synopsisEl], { opacity: 1, y: 0 });
        return;
      }
      gsap.to([this.headlineEl, this.synopsisEl], {
        opacity: 0,
        y: -3,
        duration: 0.12,
        onComplete: () => {
          this.headlineEl.textContent = sub.name[lang];
          this.synopsisEl.textContent = sub.synopsis[lang];

          gsap.to([this.headlineEl, this.synopsisEl], {
            opacity: 1,
            y: 0,
            duration: 0.28,
            ease: 'power2.out'
          });
        }
      });
    }

    setTheme(themeKey) {
      this.activeTheme = themeKey;
      document.body.className = `theme-${themeKey}`;

      this.themeOrbs.forEach(b => {
        b.classList.toggle('active', b.dataset.theme === themeKey);
      });

      this.core.setAtmosphere(themeKey);
    }

    updateLanguage() {
      const currentLayer = OPSEC_MODULES[this.currentLayerIdx];
      const lang = this.i18n.currentLang;

      if (this.assemblyLabel) {
        this.assemblyLabel.textContent = currentLayer.assemblyLabel[lang];
      }

      const subItems = this.submenuWrapper.querySelectorAll('.submenu-item');
      currentLayer.submodules.forEach((sub, sIdx) => {
        if (subItems[sIdx]) {
          const textSpan = subItems[sIdx].querySelector('span:last-child');
          if (textSpan) textSpan.textContent = sub.name[lang];
        }
      });

      const currentSub = currentLayer.submodules[this.currentSubmoduleIdx];
      this.headlineEl.textContent = currentSub.name[lang];
      this.synopsisEl.textContent = currentSub.synopsis[lang];
    }
  }

  /* ==========================================================================
     07. CINEMATIC FINALE STATE MACHINE (STATE 1 -> STATE 2 -> STATE 3)
     ========================================================================== */
  class DeploymentStateMachine {
    constructor(tesseract3D, configuratorUI, soundEngine, i18nManager) {
      this.core = tesseract3D;
      this.ui = configuratorUI;
      this.sound = soundEngine;
      this.i18n = i18nManager;

      this.currentState = 1;

      // Views
      this.configuratorView = document.getElementById('configurator-view');
      this.portalOverlay = document.getElementById('portal-overlay');
      this.deploymentFinale = document.getElementById('deployment-finale');

      // Buttons & Terminal Controls
      this.btnInitDeploy = document.getElementById('btn-init-deploy');
      this.btnPortalBack = document.getElementById('btn-portal-back');
      this.btnPortalDeploy = document.getElementById('btn-portal-deploy');
      this.btnReturnCore = document.getElementById('btn-return-core');
      this.btnCopyInstall = document.getElementById('btn-copy-install');
      this.navDeploy = document.getElementById('nav-deploy');
      this.navArch = document.getElementById('nav-arch');
      this.terminalCodeEl = document.getElementById('terminal-code-content');
      this.envTabs = document.querySelectorAll('.env-tab');

      this.riskCounter = document.getElementById('risk-counter');

      this.initEvents();
      this.renderEnvRecipe(this.ui.activeEnv);
    }

    renderEnvRecipe(envKey) {
      const recipe = DEPLOY_RECIPES[envKey] || DEPLOY_RECIPES.lnx;
      if (this.terminalCodeEl) {
        this.terminalCodeEl.textContent = recipe;
      }
      this.envTabs.forEach(tab => {
        const isActive = tab.dataset.env === envKey;
        tab.classList.toggle('active', isActive);
        tab.setAttribute('aria-selected', String(isActive));
      });
    }

    async copyTextSafely(text) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        return;
      }
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }

    initEvents() {
      this.ui.onEnvChange((envKey) => this.renderEnvRecipe(envKey));

      this.envTabs.forEach(tab => {
        tab.addEventListener('click', () => {
          const envKey = tab.dataset.env;
          if (!envKey || envKey === this.ui.activeEnv) return;
          this.sound.playTick();
          this.ui.setEnvironment(envKey);
        });
      });

      if (this.btnInitDeploy) {
        this.btnInitDeploy.addEventListener('click', () => this.transitionToState2());
      }
      if (this.navDeploy) {
        this.navDeploy.addEventListener('click', () => this.transitionToState2());
      }
      if (this.navArch) {
        this.navArch.addEventListener('click', () => {
          if (this.currentState !== 1) this.returnToState1();
        });
      }

      if (this.btnPortalBack) {
        this.btnPortalBack.addEventListener('click', () => {
          this.sound.playSelect();
          this.returnToState1();
        });
      }
      if (this.btnPortalDeploy) {
        this.btnPortalDeploy.addEventListener('click', () => {
          this.sound.playDeploySurge();
          this.transitionToState3();
        });
      }

      if (this.btnReturnCore) {
        this.btnReturnCore.addEventListener('click', () => {
          this.sound.playSelect();
          this.returnToState1();
        });
      }

      if (this.btnCopyInstall) {
        this.btnCopyInstall.addEventListener('click', async () => {
          const snippet = DEPLOY_RECIPES[this.ui.activeEnv] || DEPLOY_RECIPES.lnx;
          try {
            await this.copyTextSafely(snippet);
            this.sound.playSelect();
            const copySpan = this.btnCopyInstall.querySelector('.copy-text');
            if (copySpan) {
              const lang = this.i18n.currentLang;
              copySpan.textContent = I18N_DATA[lang].btnCopied;
              this.btnCopyInstall.style.color = '#10B981';
              setTimeout(() => {
                copySpan.textContent = I18N_DATA[this.i18n.currentLang].btnCopy;
                this.btnCopyInstall.style.color = '';
              }, 1800);
            }
          } catch (e) {
            // Silently ignore blocked clipboard permissions
          }
        });
      }
    }

    syncNavActiveState(isArchitecture) {
      if (this.navArch) this.navArch.classList.toggle('active', isArchitecture);
      if (this.navDeploy) this.navDeploy.classList.toggle('active', !isArchitecture);
    }

    transitionToState2() {
      if (this.currentState === 2) return;
      this.currentState = 2;
      this.sound.playSelect();
      this.syncNavActiveState(false);

      this.deploymentFinale.setAttribute('aria-hidden', 'true');
      this.deploymentFinale.classList.remove('active');

      const isMobile = window.innerWidth <= 960;
      const state1Targets = ['.left-inspector', '.right-inspector', '.hud-bottombar', '.mobile-stage-spacer'];
      gsap.killTweensOf(state1Targets);
      gsap.to(state1Targets, {
        autoAlpha: 0,
        x: (i) => isMobile ? 0 : (i === 0 ? -40 : (i === 1 ? 40 : 0)),
        y: isMobile ? 10 : 0,
        duration: isMobile ? 0.45 : 0.7,
        ease: 'power3.inOut',
        onComplete: () => {
          this.configuratorView.style.visibility = 'hidden';
          this.configuratorView.style.pointerEvents = 'none';
        }
      });

      if (this.core.hasWebGL && this.core.opsecCoreGroup) {
        this.core.applyResponsiveFraming(2, false);
        gsap.to(this.core.opsecCoreGroup.rotation, {
          y: Math.PI / 2,
          x: Math.PI / 6,
          duration: 1.3,
          ease: 'power3.inOut'
        });

        this.core.vaultCornerBlocks.forEach((block, idx) => {
          const base = this.core.cornerBasePositions[idx];
          gsap.to(block.position, {
            x: base.x * 0.9,
            y: base.y * 0.9,
            z: base.z * 0.9,
            duration: 1.0,
            ease: 'power3.inOut'
          });
        });
      }

      this.portalOverlay.setAttribute('aria-hidden', 'false');
      this.portalOverlay.classList.add('active');
      gsap.fromTo(this.portalOverlay.querySelectorAll('.portal-circle-wrapper'),
        { scale: 0.85, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.25 }
      );
    }

    returnToState1() {
      this.currentState = 1;
      this.syncNavActiveState(true);
      this.portalOverlay.setAttribute('aria-hidden', 'true');
      this.deploymentFinale.setAttribute('aria-hidden', 'true');
      this.portalOverlay.classList.remove('active');
      this.deploymentFinale.classList.remove('active');
      this.configuratorView.style.visibility = 'visible';
      this.configuratorView.style.pointerEvents = 'auto';

      if (this.core.hasWebGL && this.core.opsecCoreGroup) {
        this.core.applyResponsiveFraming(1, false);
        this.core.setLayer(this.ui.currentLayerIdx);
      }

      const state1Targets = ['.left-inspector', '.right-inspector', '.hud-bottombar', '.mobile-stage-spacer'];
      gsap.killTweensOf(state1Targets);
      gsap.to(state1Targets, {
        autoAlpha: 1,
        x: 0,
        y: 0,
        duration: 0.65,
        ease: 'power3.out',
        delay: 0.15
      });
    }

    transitionToState3() {
      this.currentState = 3;

      gsap.to(this.portalOverlay, {
        opacity: 0,
        duration: 0.45,
        onComplete: () => {
          this.portalOverlay.setAttribute('aria-hidden', 'true');
          this.portalOverlay.classList.remove('active');
          this.portalOverlay.style.opacity = '';
        }
      });

      if (this.core.hasWebGL && this.core.opsecCoreGroup) {
        this.core.applyResponsiveFraming(3, false);
      }

      this.deploymentFinale.setAttribute('aria-hidden', 'false');
      this.deploymentFinale.classList.add('active');
      gsap.fromTo('.finale-content',
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 1.0, ease: 'power3.out', delay: 0.4 }
      );

      const counterObj = { val: 99.9 };
      gsap.to(counterObj, {
        val: 0.00,
        duration: 2.0,
        ease: 'power3.out',
        delay: 0.5,
        onUpdate: () => {
          if (this.riskCounter) {
            this.riskCounter.textContent = `${counterObj.val.toFixed(2)}%`;
          }
        }
      });
    }
  }

  /* ==========================================================================
     08. RUST CORE SPECIFICATION DRAWER & I18N RENDERER
     ========================================================================== */
  class SpecModalController {
    constructor(soundEngine, i18nManager) {
      this.sound = soundEngine;
      this.i18n = i18nManager;
      this.modal = document.getElementById('spec-modal');
      this.backdrop = document.getElementById('spec-backdrop');
      this.closeBtn = document.getElementById('btn-close-spec');
      this.triggerNav = document.getElementById('nav-spec');
      this.fileListEl = document.getElementById('corpus-file-list');

      this.initEvents();
      this.renderFiles();
    }

    initEvents() {
      if (this.triggerNav) {
        this.triggerNav.addEventListener('click', () => {
          this.sound.playSelect();
          this.open();
        });
      }
      if (this.closeBtn) {
        this.closeBtn.addEventListener('click', () => {
          this.sound.playTick();
          this.close();
        });
      }
      if (this.backdrop) {
        this.backdrop.addEventListener('click', () => {
          this.sound.playTick();
          this.close();
        });
      }

      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.modal && this.modal.classList.contains('active')) {
          this.close();
        }
      });
    }

    open() {
      if (!this.modal) return;
      this.modal.setAttribute('aria-hidden', 'false');
      this.modal.classList.add('active');
    }

    close() {
      if (!this.modal) return;
      this.modal.setAttribute('aria-hidden', 'true');
      this.modal.classList.remove('active');
    }

    renderFiles() {
      if (!this.fileListEl) return;
      const lang = this.i18n.currentLang;
      this.fileListEl.replaceChildren();

      RUST_ARCHITECTURE_FILES.forEach(item => {
        const fileDiv = document.createElement('div');
        fileDiv.className = 'corpus-file-item';

        const pathEl = document.createElement('div');
        pathEl.className = 'file-path';
        pathEl.textContent = item.path;

        const descEl = document.createElement('div');
        descEl.className = 'file-desc';
        descEl.textContent = item[lang];

        fileDiv.appendChild(pathEl);
        fileDiv.appendChild(descEl);
        this.fileListEl.appendChild(fileDiv);
      });
    }
  }

  /* ==========================================================================
     09. GLOBAL I18N MANAGER (SAFE DOM TEXT RENDERING)
     ========================================================================== */
  class I18nManager {
    constructor() {
      this.currentLang = 'en';
      this.subscribers = [];
      this.initButtons();
    }

    subscribe(fn) {
      this.subscribers.push(fn);
    }

    renderSafeText(el, value) {
      el.replaceChildren();
      if (value.includes('\n')) {
        value.split('\n').forEach((line, idx) => {
          if (idx > 0) el.appendChild(document.createElement('br'));
          el.appendChild(document.createTextNode(line));
        });
        return;
      }
      if (value.includes('`')) {
        value.split(/(`[^`]+`)/g).forEach(part => {
          if (part.startsWith('`') && part.endsWith('`')) {
            const codeEl = document.createElement('code');
            codeEl.textContent = part.slice(1, -1);
            el.appendChild(codeEl);
          } else if (part) {
            el.appendChild(document.createTextNode(part));
          }
        });
        return;
      }
      el.textContent = value;
    }

    setLanguage(lang) {
      if (this.currentLang === lang || !I18N_DATA[lang]) return;
      this.currentLang = lang;
      document.documentElement.setAttribute('lang', lang);
      document.body.setAttribute('data-lang', lang);

      document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.langVal === lang);
      });

      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = I18N_DATA[lang][key];
        if (translation) {
          this.renderSafeText(el, translation);
        }
      });

      this.subscribers.forEach(fn => fn(lang));
    }

    initButtons() {
      document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          this.setLanguage(btn.dataset.langVal);
        });
      });
    }
  }

  /* ==========================================================================
     10. APPLICATION LIFECYCLE BOOTSTRAPPER
     ========================================================================== */
  function initApp() {
    const soundEngine = new SoundEngine();
    const soundBtn = document.getElementById('btn-sound-toggle');
    const soundLabel = document.getElementById('sound-state-label');
    const i18n = new I18nManager();

    const syncSoundLabel = () => {
      if (!soundLabel) return;
      const dict = I18N_DATA[i18n.currentLang];
      soundLabel.textContent = soundEngine.enabled ? dict.soundOn : dict.soundMuted;
    };

    if (soundBtn) {
      soundBtn.addEventListener('click', () => {
        soundEngine.toggle();
        syncSoundLabel();
      });
    }

    new CursorController(soundEngine);

    const githubService = new GitHubService();
    githubService.fetchStats();

    const webglContainer = document.getElementById('webgl-container');
    const tesseractCore = new AnonCryptographicTesseract3D(webglContainer, soundEngine);

    const configurator = new ConfiguratorUI(tesseractCore, soundEngine, i18n);
    new DeploymentStateMachine(tesseractCore, configurator, soundEngine, i18n);
    const specModal = new SpecModalController(soundEngine, i18n);

    i18n.subscribe(() => {
      configurator.updateLanguage();
      specModal.renderFiles();
      syncSoundLabel();
    });

    console.log('%c[ANON v3.0.0] Pure Rust OPSEC Core & Cryptographic Tesseract Ready.', 'color: #FF331F; font-weight: bold;');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }

})();

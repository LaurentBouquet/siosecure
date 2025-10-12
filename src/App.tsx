import { useState, useEffect } from 'react';
import { Network, Users, Globe, Award, MapPin, Mail, Phone, Linkedin, Twitter, FileText } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('accueil');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['accueil', 'entreprise', 'services', 'recrutement', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
        }`}>
        <div className="px-4 mx-auto max-w-7xl sm:px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <img src="/SIOsecure_logo.png" alt="SIOsecure" className="h-12" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-blue-900">SIOsecure</span>
                <span className="text-xs text-gray-500">Développement, Infrastructure & Sécurité</span>
              </div>
            </div>

            {/* Desktop navigation */}
            <div className="items-center hidden space-x-8 md:flex">
              {[
                { id: 'accueil', label: 'Accueil' },
                { id: 'entreprise', label: "L'Entreprise" },
                { id: 'services', label: 'Nos Services' },
                { id: 'recrutement', label: 'Recrutement' },
                { id: 'contact', label: 'Contact' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors relative pb-1 ${activeSection === item.id
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                    }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></span>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                aria-label="Ouvrir le menu"
                className="p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-900">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="bg-white border-t border-gray-100 shadow-lg md:hidden">
            <div className="flex flex-col px-4 py-4 space-y-2">
              {[
                { id: 'accueil', label: 'Accueil' },
                { id: 'entreprise', label: "L'Entreprise" },
                { id: 'services', label: 'Nos Services' },
                { id: 'recrutement', label: 'Recrutement' },
                { id: 'contact', label: 'Contact' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => { scrollToSection(item.id); setMobileMenuOpen(false); }}
                  className={`w-full text-left text-base font-medium py-2 px-2 rounded transition-colors ${activeSection === item.id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Bannière visuelle */}
      <div className="flex items-center justify-center w-full bg-white pt-navbar">
        <img
          src="/banniere.png"
          alt="Bannière SIOsecure"
          className="w-full object-cover object-top max-h-50 sm:max-h-66 md:max-h-90 lg:max-h-[42rem] xl:max-h-[50rem]"
        />
      </div>
      <section id="accueil" className="flex items-center py-1 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="px-4 py-1 mx-auto max-w-7xl sm:px-6 sm:py-10">
          <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <h1 className="mb-2 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-6xl">
                SIOsecure <span className="text-blue-600">Développement, Infrastructure <br />& Sécurité</span>
              </h1>
              <p className="mb-6 text-lg font-medium text-gray-700">Bâtir et protéger votre logiciel et son infrastructure</p>
              <p className="mb-8 text-base leading-relaxed text-gray-600 sm:text-xl">
                Depuis notre siège en Normandie, nous accompagnons nos clients depuis notre datacenter basé en Europe (infrastructure externalisée) pour concevoir, sécuriser et opérer leurs solutions numériques critiques.
              </p>
              <div className="flex flex-col flex-wrap gap-4 sm:flex-row">
                <button
                  onClick={() => scrollToSection('recrutement')}
                  className="px-8 py-4 font-semibold text-white transition-all transform bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105"
                >
                  Rejoignez-nous
                </button>
                <button
                  onClick={() => scrollToSection('entreprise')}
                  className="px-8 py-4 font-semibold text-blue-600 transition-all bg-white border-2 border-blue-600 rounded-lg hover:bg-gray-50"
                >
                  Découvrir SIOsecure
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="p-6 transition-transform transform shadow-2xl bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl sm:p-8 hover:scale-105">
                <Network className="w-full h-40 text-white sm:h-64 opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="mb-2 text-4xl font-bold sm:text-6xl">10 000+</div>
                    <div className="text-lg font-light sm:text-2xl">Collaborateurs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="entreprise" className="py-16 bg-white sm:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">L'Entreprise</h2>
            <div className="w-20 h-1 mx-auto bg-blue-600"></div>
          </div>

          <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-3 md:gap-8 md:mb-16">
            <div className="p-8 text-center transition-shadow bg-gradient-to-br from-blue-50 to-white rounded-xl hover:shadow-xl">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Quelque part en Normandie</h3>
              <p className="text-gray-600">Siège social au cœur du quartier d'affaires européen</p>
            </div>

            <div className="p-8 text-center transition-shadow bg-gradient-to-br from-blue-50 to-white rounded-xl hover:shadow-xl">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">10 000+ Collaborateurs</h3>
              <p className="text-gray-600">Une équipe d'experts répartie dans toute l'Europe</p>
            </div>

            <div className="p-8 text-center transition-shadow bg-gradient-to-br from-blue-50 to-white rounded-xl hover:shadow-xl">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Leader Européen</h3>
              <p className="text-gray-600">Présence sur plusieurs sites à travers l'Europe</p>
            </div>
          </div>

          <div className="p-6 bg-gray-50 rounded-2xl sm:p-12">
            <h3 className="mb-6 text-3xl font-bold text-gray-900">Notre Mission</h3>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              SIOsecure est une ESN polyvalente experte en infrastructure système et réseau, développement Web et mobile, ainsi qu'en cybersécurité. Nous aidons nos clients à concevoir, sécuriser et exploiter leurs solutions numériques en combinant expertise technique et bonnes pratiques de sécurité.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Nous opérons depuis un datacenter basé en Europe (infrastructure externalisée) et investissons dans la formation continue de nos talents pour garantir des services fiables et conformes aux meilleures pratiques de sécurité.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">Nos Services</h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-blue-600"></div>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              Solutions et services pour infrastructure système & réseau, développement applicatif (Web & mobile) et cybersécurité
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
            {[
              {
                title: 'Infrastructure système & réseau',
                description: 'Conception, déploiement et exploitation d\'infrastructures systèmes et réseaux résilientes et sécurisées.',
                icon: Network
              },
              {
                title: 'Développement Web & mobile',
                description: 'Conception et développement d\'applications Web et mobile sécurisées et performantes (front & back).',
                icon: Award
              },
              {
                title: 'Cybersécurité applicative',
                description: 'Audits, tests d\'intrusion et remédiation sécurité pour applications et APIs (aligné OWASP).',
                icon: Globe
              },
              {
                title: 'Cloud & datacenter',
                description: 'Services d\'hébergement et d\'orchestration cloud sécurisés en datacenter français.',
                icon: Globe
              },
              {
                title: 'Support & maintenance',
                description: 'Équipes d\'assistance et d\'exploitation pour garantir la disponibilité des services.',
                icon: Users
              },
              {
                title: 'Conseil & formation',
                description: 'Accompagnement stratégique, formation sécurité et bonnes pratiques DevOps.',
                icon: Award
              }
            ].map((service, index) => (
              <div key={index} className="p-8 transition-all transform bg-white rounded-xl hover:shadow-2xl hover:-translate-y-1">
                <div className="flex items-center justify-center mb-6 bg-blue-100 rounded-lg w-14 h-14">
                  <service.icon className="text-blue-600 w-7 h-7" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900">{service.title}</h3>
                <p className="leading-relaxed text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="recrutement" className="py-16 bg-white sm:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">Recrutement</h2>
            <div className="w-20 h-1 mx-auto bg-blue-600"></div>
          </div>

          <div className="p-6 mb-8 text-white bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl sm:p-12 sm:mb-12">
            <div className="mx-auto max-w-7xl">
              <div className="grid grid-cols-1 gap-10 md:gap-16 md:grid-cols-2">

                {/* Panneau 2 : Consultant infra sécurisée junior */}
                <div className="p-6 px-4 bg-white border border-gray-100 shadow-lg rounded-2xl">
                  <h3 className="mb-4 text-2xl font-bold text-blue-600">Consultant infra sécurisée junior</h3>
                  <p className="mb-4 text-gray-700">Nous recherchons des consultants cybersécurité junior
                    pour rejoindre notre pôle « Infrastructure & Sécurité », dans le cadre du développement de nos activités.</p>

                  <p className="mb-4 text-gray-700">Vous interviendrez au sein d’une équipe et serez en charge de :</p>

                  <ul className="mb-4 space-y-2 text-gray-600 list-disc list-inside">
                    <li>Déployer et administrer un pare-feu de type pfSense.</li>
                    <li>Mettre en place et sécuriser une infrastructure mutualisée (Debian 13, Docker, LXC).</li>
                    <li>Déployer des services métiers.</li>
                    <li>TODO</li>
                    <li>Mettre en place des solutions de supervision et de détection d'intrusion (Suricata, Wazuh, Lynis).</li>
                    <li>Rédiger des rapports techniques et de sécurité destinés à nos clients.</li>
                  </ul>

                  <h4 className="mb-2 text-lg font-bold text-gray-900">Profil recherché</h4>
                  <ul className="mb-4 space-y-2 text-gray-600 list-disc list-inside">
                    <li>Étudiant(e) en BTS SIO option SISR ou formation équivalente.</li>
                    <li>Connaissances de base en systèmes Linux (Debian) et réseaux (TCP/IP, VLANs).</li>
                    <li>Sensibilité aux enjeux de cybersécurité et volonté d'apprendre.</li>
                    <li>Intérêt pour les environnements virtualisés (Proxmox) et conteneurisés (Docker).</li>
                    <li>Capacité à documenter et présenter vos travaux de manière professionnelle.</li>
                  </ul>

                  <h4 className="mb-2 text-lg font-bold text-gray-900">Ce que nous offrons</h4>
                  <ul className="mb-4 space-y-2 text-gray-600 list-disc list-inside">
                    <li>Expérience sur des projets et une infrastructure externalisée réelle.</li>
                    <li>Accompagnement par des experts en sécurité informatique.</li>
                    <li>Opportunité de monter en compétences rapidement.</li>
                  </ul>

                  <hr className="my-4" />

                  <div className="flex flex-col mt-4 md:flex-row md:items-center md:space-x-4">

                    <a
                      href="/offres-emploi/ConsultantDev/01_offre_emploi.pdf"
                      download
                      className="inline-flex items-center px-6 py-3 mt-3 font-semibold text-white transition-all transform bg-blue-600 rounded-lg md:mt-0 hover:bg-blue-700 hover:scale-105"
                    >
                      <FileText className="w-5 h-5 mr-2" />
                      Télécharger (PDF)
                    </a>

                    <a href="mailto:siosecure@joliciel.pro" className="px-6 py-3 font-semibold text-white transition-all transform bg-green-600 rounded-lg hover:bg-green-700 hover:scale-105">
                      Postuler
                    </a>

                  </div>

                  <div className="flex flex-col mt-4 ml-10">
                    <p className="mt-3 text-sm text-blue-700 md:mt-0">Date limite : Mardi 30/09/2025 – 18 h</p>
                    <p className="mt-3 text-sm text-blue-700 md:mt-0">Lieu : Normandie</p>
                    <p className="mt-3 text-sm text-blue-700 md:mt-0">Contact : siosecure@joliciel.pro</p>
                  </div>
                </div>

                {/* Panneau 1 : Consultant développement sécurisé junior */}
                <div className="p-6 px-4 bg-white border border-gray-100 shadow-lg rounded-2xl">
                  <h3 className="mb-4 text-2xl font-bold text-blue-600">Consultant développement sécurisé junior</h3>
                  <p className="mb-4 text-gray-700">Rejoignez notre pôle « Développement Web & Sécurité » et participez au développement et à la sécurisation d'applications Web et d'architectures DevOps pour nos clients.</p>

                  <p className="mb-4 text-gray-700">Vous interviendrez au sein d’une équipe et serez en charge de :</p>

                  <ul className="mb-4 space-y-2 text-gray-600 list-disc list-inside">
                    <li>Développer et sécuriser des applications Web full-stack.</li>
                    <li>Implémenter des mécanismes d'authentification sécurisés (JWT, OAuth2, OpenID Connect).</li>
                    <li>Réaliser des audits de vulnérabilités sur les applications Web (recherche d'injections SQL, XSS,
                      LFI/RFI) selon les standards OWASP.</li>
                    <li>Appliquer des pratiques de cryptographie (chiffrement des données sensibles).</li>
                    <li>Rédiger des rapports techniques et de sécurité destinés à nos clients.</li>
                  </ul>

                  <h4 className="mb-2 text-lg font-bold text-gray-900">Profil recherché</h4>
                  <ul className="mb-4 space-y-2 text-gray-600 list-disc list-inside">
                    <li>Étudiant(e) en BTS SIO option SLAM ou formation équivalente.</li>
                    <li>Connaissances de base en développement Web (frameworks modernes) et bases de données (Supabase, SQL)</li>
                    <li>Sensibilité à la sécurité applicative (OWASP) et volonté d'apprendre</li>
                    <li>Intérêt pour les pratiques DevOps (CI/CD, conteneurs)</li>
                    <li>Rédiger des rapports techniques et de sécurité destinés à nos clients.</li>
                  </ul>

                  <h4 className="mb-2 text-lg font-bold text-gray-900">Ce que nous offrons</h4>
                  <ul className="mb-4 space-y-2 text-gray-600 list-disc list-inside">
                    <li>Expérience sur des projets et une infrastructure externalisée réelle.</li>
                    <li>Accompagnement par des experts en sécurité informatique.</li>
                    <li>Opportunité de monter en compétences rapidement.</li>
                  </ul>

                  <hr className="my-4" />

                  <div className="flex flex-col mt-4 md:flex-row md:items-center md:space-x-4">

                    <a
                      href="/offres-emploi/ConsultantDev/01_offre_emploi.pdf"
                      download
                      className="inline-flex items-center px-6 py-3 mt-3 font-semibold text-white transition-all transform bg-blue-600 rounded-lg md:mt-0 hover:bg-blue-700 hover:scale-105"
                    >
                      <FileText className="w-5 h-5 mr-2" />
                      Télécharger (PDF)
                    </a>

                    <a href="mailto:siosecure@joliciel.pro" className="px-6 py-3 font-semibold text-white transition-all transform bg-green-600 rounded-lg hover:bg-green-700 hover:scale-105">
                      Postuler
                    </a>

                  </div>

                  <div className="flex flex-col mt-4 ml-10">
                    <p className="mt-3 text-sm text-blue-700 md:mt-0">Date limite : Vendredi 07/11/2025 – 13 h</p>
                    <p className="mt-3 text-sm text-blue-700 md:mt-0">Lieu : Normandie</p>
                    <p className="mt-3 text-sm text-blue-700 md:mt-0">Contact : siosecure@joliciel.pro</p>
                  </div>

                </div>

              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-blue-600">95%</div>
              <p className="text-gray-600">Taux d'embauche après apprentissage</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-blue-600">200+</div>
              <p className="text-gray-600">Apprentis formés chaque année</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-blue-600">15+</div>
              <p className="text-gray-600">Programmes de formation</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">Contactez-nous</h2>
            <div className="w-20 h-1 mx-auto bg-blue-600"></div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <h3 className="mb-6 text-2xl font-bold text-gray-900">Nos coordonnées</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-gray-900">Adresse</h4>
                    <p className="text-gray-600">Quelque part en Normandie</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-gray-900">Téléphone</h4>
                    <p className="text-gray-600">+33 1 98 76 54 32</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">siosecure@joliciel.pro</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="mb-4 font-semibold text-gray-900">Suivez-nous</h4>
                <div className="flex space-x-4">
                  <a href="#" className="p-3 transition-colors bg-blue-600 rounded-full hover:bg-blue-700">
                    <Linkedin className="w-6 h-6 text-white" />
                  </a>
                  <a href="#" className="p-3 transition-colors bg-blue-600 rounded-full hover:bg-blue-700">
                    <Twitter className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white shadow-lg rounded-xl sm:p-8">
              <h3 className="mb-6 text-2xl font-bold text-gray-900">Envoyez-nous un message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">Nom complet</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="votre.email@exemple.fr"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">Sujet</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Sujet de votre message"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg outline-none resize-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Votre message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 font-semibold text-white transition-all transform bg-blue-600 rounded-lg hover:bg-blue-700 hover:scale-105"
                >
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 text-white bg-gray-900 sm:py-12">
        <div className="px-4 mx-auto max-w-7xl sm:px-6">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="flex items-center mb-4 space-x-3 md:mb-0">
              <img src="/SIOsecure_logo.png" alt="SIOsecure" className="h-28 filter brightness-0 invert" />
            </div>
            <p className="text-sm text-center text-gray-400 md:text-right sm:text-base">
              © {new Date().getFullYear()} SIOsecure. ESN — infrastructure système & réseau, développement Web & mobile et cybersécurité.
              <br />Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

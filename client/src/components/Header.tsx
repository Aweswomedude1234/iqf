import { useState } from 'react';
import { Link } from 'wouter';
import { Search, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const aboutDropdownItems = [
    { href: '/our-cause', label: 'Our Cause' },
    { href: '/team', label: 'Our Team' },
    /*{ href: '/our-chapters', label: 'Our Chapters' },*/
  ];

  const programsDropdownItems = [
    { href: '/programs/robotics', label: 'FLL Robotics Team' },
    { href: '/programs/ai', label: 'AI Academy' },
    { href: '/programs/chess', label: 'Kings Academy of Chess' },
    { href: '/programs/stem', label: 'STEM Lab' },
    { href: '/programs/high-school', label: 'High School programs' },
    { href: '/programs/coding', label: 'CodeStation' },
  ];

  const joinUsDropdownItems = [
    { href: '/join-us#join', label: 'Join Us' },
    { href: '/volunteer', label: 'Volunteer' },
    /*
    { href: '/join-us#sponsor', label: 'Sponsor' },
    { href: '/join-us#partner', label: 'Partner With Us' },
    { href: '/join-us#chapter', label: 'Make a Chapter' },
     */
  ];

  // Global search data
  const searchableContent = [
    // Main pages
    { title: 'Home', description: 'Welcome to IQ Foundation - Empowering youth through innovative education', url: '/', page: 'Home' },
    { title: 'About Us', description: 'Learn about our mission to transform education and our impact', url: '/about', page: 'About' },
    { title: 'Our Cause', description: 'Foster innovation, bridge gaps, and build future-ready skills', url: '/our-cause', page: 'Our Cause' },
    { title: 'Our Team', description: 'Meet the dedicated educators and founders behind IQ Foundation', url: '/team', page: 'Our Team' },
    { title: 'Our Chapters', description: 'Find local IQ Foundation chapters across the country', url: '/our-chapters', page: 'Our Chapters' },
    { title: 'Events', description: 'Upcoming workshops, competitions, and learning opportunities', url: '/events', page: 'Events' },
    { title: 'Join Us', description: 'Get involved through volunteering, sponsoring, or partnerships', url: '/join-us', page: 'Join Us' },
    
    // Program pages
    { title: 'Robotics Team', description: 'Build, program, and compete with cutting-edge robotics technology', url: '/programs/robotics', page: 'Programs' },
    { title: 'AI & Machine Learning', description: 'Explore artificial intelligence and build intelligent systems', url: '/programs/ai', page: 'Programs' },
    { title: 'Chess Club', description: 'Develop strategic thinking through the royal game of chess', url: '/programs/chess', page: 'Programs' },
    { title: 'STEM Programs', description: 'Science, Technology, Engineering, and Mathematics education', url: '/programs/stem', page: 'Programs' },
    { title: 'High School Programs', description: 'Advanced programs for college preparation and career readiness', url: '/programs/high-school', page: 'Programs' },
    { title: 'Coding Bootcamp', description: 'Learn programming from basics to real-world applications', url: '/programs/coding', page: 'Programs' },
    
    // Key concepts and features
    { title: 'STEM Education', description: 'Hands-on science, technology, engineering, and math learning', url: '/programs/stem', page: 'Programs' },
    { title: 'Programming', description: 'Learn Python, JavaScript, Java, and web development', url: '/programs/coding', page: 'Coding' },
    { title: 'Artificial Intelligence', description: 'Machine learning, neural networks, and AI applications', url: '/programs/ai', page: 'AI Programs' },
    { title: 'Engineering', description: 'Design thinking, problem-solving, and robotics engineering', url: '/programs/robotics', page: 'Robotics' },
    { title: 'Competition Teams', description: 'Robotics competitions, chess tournaments, and academic contests', url: '/events', page: 'Events' },
    { title: 'Volunteer Opportunities', description: 'Teaching, mentoring, and supporting educational programs', url: '/join-us#volunteer', page: 'Join Us' },
    { title: 'Sponsorship', description: 'Support our mission through financial contributions', url: '/join-us#sponsor', page: 'Join Us' },
    { title: 'Partnerships', description: 'Collaborate with us to expand educational opportunities', url: '/join-us#partner', page: 'Join Us' },
    { title: 'Start a Chapter', description: 'Bring IQ Foundation to your local community', url: '/join-us#chapter', page: 'Join Us' },
  ];

  const handleGlobalSearch = (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    
    // Simulate search delay
    setTimeout(() => {
      const results = searchableContent.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.page.toLowerCase().includes(query.toLowerCase())
      );
      
      setSearchResults(results);
      setIsSearching(false);
    }, 300);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50" data-testid="header-navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" data-testid="link-home">
              <div className="flex items-center space-x-3">
                <img 
                  src="/officialiqf.png"
                  alt="IQ Foundation Logo"
                  className="h-10 w-10 rounded-full"
                />
                <h1 className="text-xl font-bold text-foreground hover:text-accent transition-colors">
                  IQ Foundation
                </h1>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {/* Home */}
            <Link href="/" className="nav-link text-foreground font-medium px-3 py-2 hover:text-blue-600 transition-colors">
              Home
            </Link>

            {/* About Us Dropdown */}
            <div className="relative group">
              <button className="nav-link text-foreground font-medium px-3 py-2 hover:text-blue-600 transition-colors flex items-center">
                About Us
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-blue-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2">
                  {aboutDropdownItems.map((item) => (
                    <Link key={item.href} href={item.href} className="block px-3 py-2 text-sm text-foreground hover:bg-blue-50 hover:text-blue-700 rounded-md transition-colors">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Our Programs Dropdown */}
            <div className="relative group">
              <button className="nav-link text-foreground font-medium px-3 py-2 hover:text-blue-600 transition-colors flex items-center">
                Our Programs
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-blue-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2">
                  {programsDropdownItems.map((item) => (
                    <Link key={item.href} href={item.href} className="block px-3 py-2 text-sm text-foreground hover:bg-blue-50 hover:text-blue-700 rounded-md transition-colors">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Events */}
            <Link href="/events" className="nav-link text-foreground font-medium px-3 py-2 hover:text-blue-600 transition-colors">
              Events
            </Link>

            {/* Join Us Dropdown */}
            <div className="relative group">
              <button className="nav-link text-foreground font-medium px-3 py-2 hover:text-blue-600 transition-colors flex items-center">
                Join Us
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-blue-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2">
                  {joinUsDropdownItems.map((item) => (
                    <Link key={item.href} href={item.href} className="block px-3 py-2 text-sm text-foreground hover:bg-blue-50 hover:text-blue-700 rounded-md transition-colors">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Search Bar */}
          <div className="relative hidden md:block">
            {!isSearchOpen ? (
              <Button
                variant="ghost"
                onClick={() => setIsSearchOpen(true)}
                className="p-2"
                data-testid="button-search-toggle"
              >
                <Search className="h-5 w-5 text-foreground" />
              </Button>
            ) : (
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search across all pages..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    handleGlobalSearch(e.target.value);
                  }}
                  className="search-input w-80 pr-10 py-2 border border-border rounded-lg focus:outline-none bg-background"
                  data-testid="input-search"
                  autoFocus
                />
                <Button
                  variant="ghost"
                  onClick={() => {
                    setIsSearchOpen(false);
                    setSearchQuery('');
                    setSearchResults([]);
                  }}
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 p-1"
                  data-testid="button-search-close"
                >
                  <X className="h-4 w-4 text-muted-foreground" />
                </Button>

                {/* Search Results Dropdown */}
                {searchQuery && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-lg shadow-lg max-h-96 overflow-y-auto z-50">
                    {isSearching ? (
                      <div className="p-4 text-center text-muted-foreground">
                        Searching...
                      </div>
                    ) : searchResults.length > 0 ? (
                      <div className="p-2">
                        {searchResults.slice(0, 8).map((result, index) => (
                          <a
                            key={index}
                            href={result.url}
                            className="block p-3 hover:bg-secondary rounded-md transition-colors"
                            onClick={() => {
                              setIsSearchOpen(false);
                              setSearchQuery('');
                              setSearchResults([]);
                            }}
                          >
                            <div className="font-medium text-foreground text-sm">
                              {result.title}
                            </div>
                            <div className="text-muted-foreground text-xs mt-1 line-clamp-2">
                              {result.description}
                            </div>
                            <div className="text-accent text-xs mt-1">
                              {result.page}
                            </div>
                          </a>
                        ))}
                      </div>
                    ) : (
                      <div className="p-4 text-center text-muted-foreground">
                        No results found for "{searchQuery}"
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-accent"
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border" data-testid="mobile-menu">
            <div className="flex flex-col space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search website..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none bg-background"
                  data-testid="input-search-mobile"
                />
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              </div>
              
              {/* Mobile Navigation Links */}
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="nav-link text-foreground font-medium block py-2">Home</span>
              </Link>
              
              <div className="space-y-2">
                <span className="text-foreground font-semibold">About Us</span>
                {aboutDropdownItems.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                    <span className="nav-link text-foreground font-medium block py-1 pl-4">{item.label}</span>
                  </Link>
                ))}
              </div>

              <div className="space-y-2">
                <span className="text-foreground font-semibold">Our Programs</span>
                {programsDropdownItems.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                    <span className="nav-link text-foreground font-medium block py-1 pl-4">{item.label}</span>
                  </Link>
                ))}
              </div>

              <Link href="/events" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="nav-link text-foreground font-medium block py-2">Events</span>
              </Link>

              <div className="space-y-2">
                <span className="text-foreground font-semibold">Join Us</span>
                {joinUsDropdownItems.map((item) => (
                  <a key={item.href} href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                    <span className="nav-link text-foreground font-medium block py-1 pl-4">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

import React, { useEffect, useState } from 'react';
import SEO from '@/components/SEO';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Users, 
  Dumbbell, 
  ChevronLeft, 
  ChevronRight, 
  Filter,
  Flame,
  Heart,
  Check,
  ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Schedule = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedView, setSelectedView] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);
  
  // Generate dates for the week
  const weekDates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(selectedDate);
    date.setDate(date.getDate() - date.getDay() + i);
    return date;
  });

  useEffect(() => {
    document.body.classList.add('dark');
    return () => {
      document.body.classList.remove('dark');
    };
  }, []);

  const categories = [
    { name: 'All', icon: Dumbbell },
    { name: 'Cardio', icon: Flame },
    { name: 'Strength', icon: Dumbbell },
    { name: 'Mind & Body', icon: Heart },
    { name: 'Dance', icon: Users },
    { name: 'CrossFit', icon: Flame }
  ];

  const classes = [
    {
      id: 1,
      name: 'HIIT Training',
      time: '06:00 AM',
      duration: '45 min',
      trainer: 'Sarah Johnson',
      capacity: 20,
      enrolled: 15,
      level: 'Intermediate',
      category: 'Cardio',
      description: 'High-intensity interval training to boost your metabolism and burn calories.',
      color: 'from-red-500/20 to-orange-500/20'
    },
    {
      id: 2,
      name: 'Yoga Flow',
      time: '07:30 AM',
      duration: '60 min',
      trainer: 'Michael Chen',
      capacity: 25,
      enrolled: 18,
      level: 'All Levels',
      category: 'Mind & Body',
      description: 'Gentle flows and poses to increase flexibility and mindfulness.',
      color: 'from-blue-500/20 to-purple-500/20'
    },
    {
      id: 3,
      name: 'Strength Training',
      time: '09:00 AM',
      duration: '60 min',
      trainer: 'David Wilson',
      capacity: 15,
      enrolled: 12,
      level: 'Advanced',
      category: 'Strength',
      description: 'Build muscle and increase strength with weights and resistance training.',
      color: 'from-green-500/20 to-emerald-500/20'
    },
    {
      id: 4,
      name: 'Zumba',
      time: '10:30 AM',
      duration: '45 min',
      trainer: 'Maria Garcia',
      capacity: 30,
      enrolled: 25,
      level: 'Beginner',
      category: 'Dance',
      description: 'Fun and energetic dance workout that feels like a party.',
      color: 'from-pink-500/20 to-purple-500/20'
    },
    {
      id: 5,
      name: 'CrossFit',
      time: '12:00 PM',
      duration: '60 min',
      trainer: 'John Smith',
      capacity: 20,
      enrolled: 20,
      level: 'Advanced',
      category: 'CrossFit',
      description: 'High-intensity functional movements that combine gymnastics, weightlifting, and cardio.',
      color: 'from-amber-500/20 to-yellow-500/20'
    },
    {
      id: 6,
      name: 'Pilates',
      time: '02:00 PM',
      duration: '50 min',
      trainer: 'Emma Roberts',
      capacity: 15,
      enrolled: 10,
      level: 'Intermediate',
      category: 'Mind & Body',
      description: 'Core-strengthening exercises that improve posture and flexibility.',
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      id: 7,
      name: 'Spin Class',
      time: '04:30 PM',
      duration: '45 min',
      trainer: 'Alex Thompson',
      capacity: 20,
      enrolled: 18,
      level: 'All Levels',
      category: 'Cardio',
      description: 'High-energy indoor cycling with music and motivation.',
      color: 'from-red-500/20 to-pink-500/20'
    },
    {
      id: 8,
      name: 'Boxing',
      time: '06:00 PM',
      duration: '60 min',
      trainer: 'Mike Turner',
      capacity: 15,
      enrolled: 14,
      level: 'Intermediate',
      category: 'Strength',
      description: 'Learn boxing techniques while getting a full-body workout.',
      color: 'from-gray-500/20 to-slate-500/20'
    }
  ];

  const filteredClasses = selectedCategory === 'All' 
    ? classes 
    : classes.filter(c => c.category === selectedCategory);


  const nextDay = () => setSelectedDate(new Date(selectedDate.getTime() + 864e5));
  const prevDay = () => setSelectedDate(new Date(selectedDate.getTime() - 864e5));
  const formatDate = d => d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  const getShortWeekday = d => d.toLocaleDateString('en-US', { weekday: 'short' });
  const getDay = d => d.getDate();
  const isDateSelected = d => d.toDateString() === selectedDate.toDateString();
  const getCategoryIcon = n => (categories.find(c => c.name === n)?.icon || Dumbbell);

  return (
    <div className="min-h-screen bg-black text-white mt-8">
      <SEO
        title="Class Schedule & Booking"
        description="Browse and book Apex Fitness classes. View our full schedule of HIIT, yoga, strength training, and wellness classes with expert trainers."
        canonical="/schedule"
      />
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
          <div className="absolute top-20 left-0 w-full h-64 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-transparent blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-t from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Button
            variant="ghost"
            className="mb-8 text-white hover:bg-white/10"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>

          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Class Schedule</h1>
                <p className="text-gray-300 max-w-2xl">
                  Book your favorite classes and join our expert trainers for an amazing workout experience.
                </p>
              </div>
              
              <div className="flex items-center mt-4 md:mt-0 space-x-3">
                <Button 
                  variant="outline" 
                  className="border-white/20 text-white hover:bg-white/10"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </Button>
                
                <div className="flex border border-white/20 rounded-lg overflow-hidden">
                  <button 
                    onClick={() => setSelectedView('grid')}
                    className={`px-3 py-2 ${selectedView === 'grid' ? 'bg-white/20' : 'bg-transparent hover:bg-white/10'}`}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
                      <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
                      <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
                      <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </button>
                  <button 
                    onClick={() => setSelectedView('list')}
                    className={`px-3 py-2 ${selectedView === 'list' ? 'bg-white/20' : 'bg-transparent hover:bg-white/10'}`}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M8 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M8 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M3 6H3.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M3 12H3.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M3 18H3.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Date and Filters Section */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Week Calendar */}
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    {formatDate(selectedDate)}
                  </h2>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="border-white/20 hover:bg-white/10" onClick={prevDay}>
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="border-white/20 hover:bg-white/10" onClick={nextDay}>
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                {/* Week day selector */}
                <div className="grid grid-cols-7 gap-2">
                  {weekDates.map((date, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedDate(date)}
                      className={`flex flex-col items-center p-3 rounded-lg transition-all ${
                        isDateSelected(date)
                          ? 'bg-white text-black'
                          : 'hover:bg-white/10'
                      }`}
                    >
                      <span className="text-xs font-medium">{getShortWeekday(date)}</span>
                      <span className="text-lg font-bold mt-1">{getDay(date)}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Categories */}
              <div className={`${showFilters ? 'block' : 'hidden lg:block'} lg:w-64 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-6 pt-6 lg:pt-0`}>
                <h3 className="text-lg font-medium mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`flex items-center w-full p-2 rounded-lg transition-all ${
                        selectedCategory === category.name
                          ? 'bg-white/20'
                          : 'hover:bg-white/10'
                      }`}
                    >
                      <category.icon className="w-4 h-4 mr-3" />
                      <span>{category.name}</span>
                      {selectedCategory === category.name && (
                        <Check className="w-4 h-4 ml-auto" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Classes */}
          {selectedView === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredClasses.map((classItem) => {
                const CategoryIcon = getCategoryIcon(classItem.category);
                return (
                <div
                  key={classItem.id}
                  className={`bg-gradient-to-br ${classItem.color} backdrop-blur-sm border border-white/10 rounded-2xl p-6 overflow-hidden relative`}
                >
                  <div className="absolute top-0 right-0 p-2">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      classItem.level === 'Beginner' ? 'bg-green-500/30 text-green-200' :
                      classItem.level === 'Intermediate' ? 'bg-yellow-500/30 text-yellow-200' :
                      'bg-red-500/30 text-red-200'
                    }`}>
                      {classItem.level}
                    </div>
                  </div>
                  
                  <div className="mb-4 flex items-center">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                      <CategoryIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-sm text-white/70">{classItem.category}</span>
                      <h3 className="text-xl font-bold">{classItem.name}</h3>
                    </div>
                  </div>
                  
                  <p className="text-sm text-white/80 mb-4 line-clamp-2">{classItem.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm">
                      <Clock className="w-4 h-4 mr-2 text-white/70" />
                      <span>{classItem.time} ({classItem.duration})</span>
                    </div>
                    
                    <div className="flex items-center text-sm">
                      <Users className="w-4 h-4 mr-2 text-white/70" />
                      <div className="flex-grow">
                        <div className="flex justify-between mb-1">
                          <span>{classItem.enrolled}/{classItem.capacity}</span>
                          <span>{Math.round((classItem.enrolled / classItem.capacity) * 100)}%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-1.5">
                          <div 
                            className="bg-white h-1.5 rounded-full" 
                            style={{ width: `${(classItem.enrolled / classItem.capacity) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-white/60">Trainer</p>
                      <p className="font-medium">{classItem.trainer}</p>
                    </div>
                    
                    <Button
                      className={`${
                        classItem.enrolled >= classItem.capacity
                          ? 'bg-white/20 text-white/60 cursor-not-allowed'
                          : 'bg-white hover:bg-white/90 text-black'
                      } px-5 py-2`}
                      disabled={classItem.enrolled >= classItem.capacity}
                    >
                      {classItem.enrolled >= classItem.capacity
                        ? 'Full'
                        : 'Book'}
                    </Button>
                  </div>
                </div>
              )})}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredClasses.map((classItem) => {
                const CategoryIcon = getCategoryIcon(classItem.category);
                return (
                <div
                  key={classItem.id}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Time column */}
                    <div className="w-full md:w-32 bg-white/10 p-4 flex md:flex-col items-center justify-between md:justify-center text-center">
                      <div>
                        <p className="text-sm text-white/70">Time</p>
                        <p className="text-xl font-bold">{classItem.time}</p>
                        <p className="text-sm">{classItem.duration}</p>
                      </div>
                      <div className="md:mt-4 flex md:flex-col items-center">
                        <CategoryIcon className="w-5 h-5 mr-2 md:mr-0 md:mb-1" />
                        <span className="text-xs">{classItem.category}</span>
                      </div>
                    </div>
                    
                    {/* Content column */}
                    <div className="flex-grow p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between">
                        <div className="mb-4 md:mb-0">
                          <div className="flex items-center mb-1">
                            <h3 className="text-xl font-bold mr-3">{classItem.name}</h3>
                            <span className={`px-3 py-0.5 rounded-full text-xs font-medium ${
                              classItem.level === 'Beginner' ? 'bg-green-500/30 text-green-200' :
                              classItem.level === 'Intermediate' ? 'bg-yellow-500/30 text-yellow-200' :
                              'bg-red-500/30 text-red-200'
                            }`}>
                              {classItem.level}
                            </span>
                          </div>
                          <p className="text-white/80">{classItem.description}</p>
                        </div>
                        
                        <div className="flex flex-col md:items-end">
                          <div className="mb-2">
                            <p className="text-sm text-white/70">Trainer</p>
                            <p className="font-medium">{classItem.trainer}</p>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <div className="w-32">
                              <div className="flex justify-between text-xs mb-1">
                                <span>Capacity</span>
                                <span>{classItem.enrolled}/{classItem.capacity}</span>
                              </div>
                              <div className="w-full bg-white/20 rounded-full h-1.5">
                                <div 
                                  className="bg-white h-1.5 rounded-full" 
                                  style={{ width: `${(classItem.enrolled / classItem.capacity) * 100}%` }}
                                ></div>
                              </div>
                            </div>
                            
                            <Button
                              className={`${
                                classItem.enrolled >= classItem.capacity
                                  ? 'bg-white/20 text-white/60 cursor-not-allowed'
                                  : 'bg-white hover:bg-white/90 text-black'
                              } px-4 py-2`}
                              disabled={classItem.enrolled >= classItem.capacity}
                            >
                              {classItem.enrolled >= classItem.capacity
                                ? 'Full'
                                : 'Book'}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )})}
            </div>
          )}
          
          {/* Link to all classes */}
          <div className="mt-12 text-center">
            <Button 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10"
              onClick={() => navigate('/classes')}
            >
              View All Classes
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Schedule;
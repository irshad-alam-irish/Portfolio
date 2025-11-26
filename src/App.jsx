import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useVisitNotification } from './hooks/useVisitNotification'

function App() {
    const [loading, setLoading] = useState(true);

    // Send email notification on visit
    useVisitNotification();

    useEffect(() => {
        // Simulate loading
        setTimeout(() => setLoading(false), 1500);
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-dark-900 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-accent-purple border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-xl gradient-text font-semibold">Loading Portfolio...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-dark-900 text-gray-100">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default App

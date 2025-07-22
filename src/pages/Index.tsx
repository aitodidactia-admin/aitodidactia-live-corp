import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageSquare, Users, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { processStampWithBackgroundRemoval } from "@/utils/processStampImage";

const Index = () => {
  const [processedStampSrc, setProcessedStampSrc] = useState<string>("/lovable-uploads/1484aa1d-3554-426f-8742-f000219d5d1c.png");

  useEffect(() => {
    const processImage = async () => {
      try {
        const processed = await processStampWithBackgroundRemoval("/lovable-uploads/1484aa1d-3554-426f-8742-f000219d5d1c.png");
        setProcessedStampSrc(processed);
      } catch (error) {
        console.error("Failed to process stamp image:", error);
        // Keep original image as fallback
      }
    };

    processImage();
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to Aitodidactia
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Your intelligent companions for learning, training, and personal development. 
            Experience the future of interactive education and coaching.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Learn More
              </Button>
            </Link>
            <Link to="/share-thoughts">
              <Button variant="outline" size="lg" className="px-8 py-3">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose Aitodidactia?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Interactive Learning</h3>
              <p className="text-gray-600">
                Engage in meaningful conversations and receive personalized feedback 
                to accelerate your learning journey.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Soft Skills Training</h3>
              <p className="text-gray-600">
                Develop essential soft skills through guided practice sessions 
                and real-world scenario simulations.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalized Experience</h3>
              <p className="text-gray-600">
                Tailored content and coaching approaches that adapt to your 
                unique learning style and goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-900 text-white relative">
        {/* Featured stamp in top left */}
        <img 
          src={processedStampSrc} 
          alt="Featured" 
          className="absolute top-6 left-6 w-24 h-24 z-10 transform -rotate-[10deg]"
        />
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Strengthen Your Mindset?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Have a chat with Aito, our Personal Development Mentor.
          </p>
          <a href="https://www.aitodidactia.uk" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3">
              Call Aito
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Index;


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FeatureDescription from "@/components/share-thoughts/FeatureDescription";
import MessageForm from "@/components/share-thoughts/MessageForm";

const ShareThoughts = () => {
  const isDevelopment = import.meta.env.DEV;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 pt-24 pb-12">
        <Card className="max-w-3xl mx-auto bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-4xl font-bold text-gray-900 text-center">Share Your Thoughts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <FeatureDescription />
            <MessageForm testMode={false} isDevelopment={isDevelopment} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ShareThoughts;

import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export function UpgradeSuccessPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-lime-400 to-teal-400 flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">
          You're Pro now ✅
        </h1>
        <p className="text-gray-600 mb-8">
          Enjoy unlimited verdicts and full history.
        </p>
        <Button
          onClick={() => navigate('/app')}
          className="w-full bg-lime-500 hover:bg-lime-600 text-white rounded-2xl py-6 text-lg font-bold"
        >
          Go to app
          <ArrowRight className="w-5 h-5 ml-2 inline" />
        </Button>
      </div>
    </div>
  );
}

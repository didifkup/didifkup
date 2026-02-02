import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

export function SignInPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md text-center">
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-lime-400 to-teal-400 flex items-center justify-center">
            <Sparkles className="w-7 h-7 text-white" />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Sign in coming soon</h1>
        <p className="text-gray-600 mb-8">
          We're bringing sign-in back. Use the app free in the meantime — no account needed.
        </p>
        <Button
          onClick={() => navigate(-1)}
          className="w-full bg-lime-500 hover:bg-lime-600 text-white rounded-xl py-3 font-bold"
        >
          Go back
        </Button>
      </div>
    </div>
  );
}

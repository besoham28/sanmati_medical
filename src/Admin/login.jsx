import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth, db } from '../firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);

            // Fetch user role from firestore
            const userDoc = await getDoc(doc(db, 'users', userCredential.user.uid));

            toast.success('Logged in successfully!');
            if (userDoc.exists() && userDoc.data().role === 'admin') {
                navigate('/admin-dashboard');
            } else {
                navigate('/user-dashboard');
            }
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="section-padding flex justify-center items-center min-h-[70vh]">
            <div className="medical-card w-full max-w-md bg-white">
                <h2 className="text-2xl font-bold font-heading text-center mb-6 text-foreground">Welcome Back</h2>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="text-sm font-medium mb-1 block">Email Address</label>
                        <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Enter your email"
                            className="w-full"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium mb-1 block">Password</label>
                        <Input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Enter your password"
                            className="w-full"
                        />
                    </div>
                    <Button type="submit" className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90" disabled={loading}>
                        {loading ? 'Logging in...' : 'Login'}
                    </Button>
                    <div className="text-center mt-4 space-y-2 text-sm text-muted-foreground">
                        <p>
                            Don't have an account? <Link to="/register" className="text-primary font-medium hover:underline">Register here</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;

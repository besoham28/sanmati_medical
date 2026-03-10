import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth, db } from '../firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            // Create user document in firestore
            await setDoc(doc(db, 'users', userCredential.user.uid), {
                email: userCredential.user.email,
                role: 'user', // Default role is 'user'
                createdAt: new Date().toISOString()
            });

            toast.success('Registration successful! Please log in.');
            navigate('/login');
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="section-padding flex justify-center items-center min-h-[70vh]">
            <div className="medical-card w-full max-w-md bg-white">
                <h2 className="text-2xl font-bold font-heading text-center mb-6 text-foreground">Create an Account</h2>
                <form onSubmit={handleRegister} className="space-y-4">
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
                            placeholder="Create a password (min 6 chars)"
                            minLength={6}
                            className="w-full"
                        />
                    </div>
                    <Button type="submit" className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90" disabled={loading}>
                        {loading ? 'Registering...' : 'Register'}
                    </Button>
                    <div className="text-center mt-4">
                        <p className="text-sm text-muted-foreground">
                            Already have an account? <Link to="/login" className="text-primary font-medium hover:underline">Login here</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;

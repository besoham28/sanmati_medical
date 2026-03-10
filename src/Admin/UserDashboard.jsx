import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase/firebase';
import { signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { User, LogOut, Package, FileText } from 'lucide-react';

const UserDashboard = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async (currentUser) => {
            try {
                const docRef = doc(db, 'users', currentUser.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setUserData({ ...docSnap.data(), uid: currentUser.uid });
                } else {
                    // If the user document doesn't exist, just use auth info
                    setUserData({ email: currentUser.email, uid: currentUser.uid });
                }
            } catch (error) {
                toast.error("Error loading user data.");
            } finally {
                setLoading(false);
            }
        };

        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                fetchUserData(user);
            } else {
                navigate('/login');
            }
        });

        return () => unsubscribe();
    }, [navigate]);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            toast.success('Logged out successfully');
            navigate('/login');
        } catch (error) {
            toast.error('Failed to log out');
        }
    };

    if (loading) {
        return (
            <div className="section-padding min-h-[70vh] flex items-center justify-center">
                <p className="text-lg text-muted-foreground animate-pulse">Loading dashboard...</p>
            </div>
        );
    }

    return (
        <div className="section-padding min-h-[70vh] bg-muted/20">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-border pb-6 mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold font-heading text-primary">My Dashboard</h1>
                        <p className="text-muted-foreground mt-1">Welcome back, <span className="font-semibold text-foreground">{userData?.email}</span></p>
                    </div>
                    <Button variant="outline" onClick={handleLogout} className="flex items-center gap-2 border-destructive text-destructive hover:bg-destructive/10">
                        <LogOut size={16} /> Logout
                    </Button>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-xl border border-border flex flex-col items-center text-center p-8 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <User size={32} className="text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">My Profile</h3>
                        <p className="text-sm text-muted-foreground mb-6">View and update your personal information.</p>
                        <Button variant="secondary" className="mt-auto w-full bg-primary/10 text-primary hover:bg-primary/20">Edit Profile</Button>
                    </div>

                    <div className="bg-white rounded-xl border border-border flex flex-col items-center text-center p-8 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <Package size={32} className="text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">My Orders</h3>
                        <p className="text-sm text-muted-foreground mb-6">Track your medicines and view order history.</p>
                        <Button variant="secondary" className="mt-auto w-full bg-primary/10 text-primary hover:bg-primary/20">View Orders</Button>
                    </div>

                    <div className="bg-white rounded-xl border border-border flex flex-col items-center text-center p-8 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <FileText size={32} className="text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Prescriptions</h3>
                        <p className="text-sm text-muted-foreground mb-6">Manage and view your uploaded prescriptions.</p>
                        <Button variant="secondary" className="mt-auto w-full bg-primary/10 text-primary hover:bg-primary/20">Manage</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;

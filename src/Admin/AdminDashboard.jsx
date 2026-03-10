import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase/firebase';
import { signOut } from 'firebase/auth';
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Users, LogOut, ShoppingCart, Settings, ShieldAlert } from 'lucide-react';

const AdminDashboard = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState({ users: 0, orders: 12 }); // Mock orders stat
    const navigate = useNavigate();

    useEffect(() => {
        const checkAdminAndFetchData = async (currentUser) => {
            try {
                const docRef = doc(db, 'users', currentUser.uid);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists() && docSnap.data().role === 'admin') {
                    setIsAdmin(true);
                    // Fetch real data (e.g. number of registered users)
                    try {
                        const usersSnapshot = await getDocs(collection(db, 'users'));
                        setStats(prev => ({ ...prev, users: usersSnapshot.size }));
                    } catch (e) {
                        console.error(e);
                    }
                } else {
                    toast.error("Access denied. Admin privileges required.");
                    navigate('/user-dashboard');
                }
            } catch (error) {
                toast.error("Error verifying admin status.");
                navigate('/login');
            } finally {
                setLoading(false);
            }
        };

        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                checkAdminAndFetchData(user);
            } else {
                navigate('/login');
            }
        });

        return () => unsubscribe();
    }, [navigate]);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            toast.success('Admin logged out successfully');
            navigate('/login');
        } catch (error) {
            toast.error('Failed to log out');
        }
    };

    if (loading) {
        return (
            <div className="section-padding min-h-[70vh] flex items-center justify-center">
                <p className="text-lg text-muted-foreground animate-pulse">Loading Admin Panel...</p>
            </div>
        );
    }

    if (!isAdmin) return null; // Or redirect/show unauthorized

    return (
        <div className="section-padding min-h-[70vh] bg-muted/20">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-border pb-6 mb-8 gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center">
                            <ShieldAlert className="text-destructive" size={24} />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold font-heading text-destructive">Admin Panel</h1>
                            <p className="text-muted-foreground mt-1">Manage pharmacy operations and users</p>
                        </div>
                    </div>
                    <Button variant="outline" onClick={handleLogout} className="flex items-center gap-2 border-destructive text-destructive hover:bg-destructive hover:text-white transition-colors">
                        <LogOut size={16} /> Logout Admin
                    </Button>
                </div>

                {/* Stats Row */}
                <div className="grid md:grid-cols-3 gap-6 mb-10">
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-border flex items-center justify-between hover:shadow-md transition-shadow">
                        <div>
                            <p className="text-sm font-semibold text-muted-foreground mb-1 uppercase tracking-wider">Total Users</p>
                            <h3 className="text-4xl font-bold text-foreground">{stats.users}</h3>
                        </div>
                        <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
                            <Users className="text-blue-600" size={28} />
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-sm border border-border flex items-center justify-between hover:shadow-md transition-shadow">
                        <div>
                            <p className="text-sm font-semibold text-muted-foreground mb-1 uppercase tracking-wider">Pending Orders</p>
                            <h3 className="text-4xl font-bold text-foreground">{stats.orders}</h3>
                        </div>
                        <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center">
                            <ShoppingCart className="text-amber-600" size={28} />
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-sm border border-border flex items-center justify-between hover:shadow-md transition-shadow">
                        <div>
                            <p className="text-sm font-semibold text-muted-foreground mb-1 uppercase tracking-wider">System Status</p>
                            <h3 className="text-2xl font-bold text-emerald-600">All Systems Go</h3>
                        </div>
                        <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center">
                            <Settings className="text-emerald-600" size={28} />
                        </div>
                    </div>
                </div>

                {/* Recent Activity Section */}
                <div className="bg-white rounded-xl shadow-sm border border-border overflow-hidden">
                    <div className="p-6 border-b border-border bg-muted/30">
                        <h2 className="text-xl font-bold font-heading">Recent Activities</h2>
                    </div>
                    <div className="p-12 text-center">
                        <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                            <Users className="text-muted-foreground" size={32} />
                        </div>
                        <p className="text-muted-foreground text-lg">No recent activities to display yet.</p>
                        <p className="text-sm text-muted-foreground mt-2">New user registrations and orders will appear here automatically.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;

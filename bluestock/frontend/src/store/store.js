import { create } from 'zustand';

export const useIPOStore = create((set) => ({
    ipo: [],
    setIpo: (ipo) => set({ipo}),
    createIPO: async (newIPO) => {
        const res = await fetch('/api/bluestock/ipos', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newIPO),
        })
        const data = await res.json();
        set((state) => ({ipo: [...state.ipo, data.data]}));
        res.status(200).JSON({success: true, message: "Ipo created"})
    },
    getIPO: async (ipo) => {
        const res = await fetch("/api/bluestock/ipos");
        const data = await res.json();
        set({ipo: data.data});
        return data.data;
    }
}));

export const useUserStore = create((set) => ({
    user: [],
    setUser: (user) => set({user}),
    // create user
    createUser: async (newUser) => {
        // once we have all the details move ahead
        if(!newUser.fname || !newUser.lname || !newUser.email || !newUser.password) {
            console.log(newUser);
            return {success: false, message: "please fill all the details"};
        }

        
        const res = await fetch("/api/bluestock/users", {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newUser),
        });

        // existing user response
        if(res.ok) {
            return { success: false, message: "User already exists" };
        }

        // store response
        const data = await res.json();

        set((state) => ({user: [...state.user, data.data]}));
        return {success: true, message: "user created"};
    },
    getUser: async (user) => { // to get all users
        const res = await fetch("/api/bluestock/users");
        const data = await res.json();
        set({user: data.data});
    },
    login: async (email, password) => { // for login purpose
        const res = await fetch('/api/bluestock/users/login', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const data = await res.json();
        set({ user: data.data });
        return data;
    }
}));
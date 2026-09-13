import { create } from 'zustand';

export const taskStore = create((set) => ({
    task: [],
    setTask: (task) => set({task}),
    createTask: async (newTask) => {
        try {
            const res = await fetch('/api/todo/task', {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(newTask),
            })
            const data = await res.json();
            set((state) => ({task: [...state.task, data.data]}));
            return { success: true, message: 'task created', data: data.newTask };
        } catch (error) {
            return { success: false, message: 'failed to create task' };
        }
    },
    fetchTask: async (task) => {
        const res = await fetch("/api/todo/task");
        const data = await res.json();
        set({task: data.data});
    },
    updateTask: async (tid, task) => {
        try {
            const res = await fetch(`/api/todo/task/${tid}`, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(task),
            });
            const data = await res.json();
            if(!data.success) {
                return {success: true, message: data.message}
            }
            set((state) => ({ task: state.task.map((newTask) => (newTask._id === tid ? data.data : newTask))}));
            return { success: true, message: 'Task updated', data: data.data };
        } catch (error) {
            return { success: false, message: 'failed to update task' };
        }
    },
    deleteTask: async (tid) => {
        try {
            const res = await fetch(`/api/todo/task/${tid}`, {method: "DELETE"});
            const data = await res.json();

            if(!res) {
                return { success: false, message: 'Faild to delete task' };
            }

            set((state) => ({task: state.task.filter((newTask) => newTask._id !== tid) }));
            
            return { success: true, message: 'Task deleted' };
        } catch (error) {
            return { success: false, message: 'Failure in deletion' };
        }
    }
}));

export const userStore = create((set) => ({
    user: [],
    setUser: (user) => set({user}),
    createUser: async (newUser) => {
        // validate user
        if( !newUser.email || !newUser.password ) {
            return { success: false, message: "Provide all the details" };
        }
        
        try {
            const res = await fetch('/api/todo/user', {
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(newUser),
            });

            // check user
            if(!res.ok) {
                return { success: false, message: "user already exist" };
            }

            const data = await res.json();

            set((state) => ({user: [...state.user, data.data]}));
            return { success: true, message: data.message };

        } catch (error) {
            return { success: false, message: error.message };
        }
    },
    fetchUser: async () => {
        const res = await fetch('/api/todo/user');
        const data = await res.json();
        set({user: data.data});
    },
    removeUser: async (id) => {
        try {
            const res = await fetch(`/api/todo/user/${id}`, {method: "DELETE"});
            const data = res.json();
            
            set((state) => ({user: [...state.user, data.data]}));
            return { success: true, message: "user deleted" };
        } catch (error) {
            return { success: false, message: "failed to delete user" };
        }
    },
    login: async (newUser) => {
        const res = await fetch('/api/todo/user');
        const data = await res.json();

        if(!res.ok) {
            return { success: false, message: "Login failed" };
        }

        const user = data.data.find((user) => user.email === newUser.email);
        if(!user) {
            return { success: false, message: "User not found" };
        }

        set({user: [user]});
        return { success: true, message: "Login successful", data: user };
    }
}));
username = input("Enter username: ")
password = input("Enter password: ")

print(f"Your account has been created successfully!!")

print(f"login now")

u_check = input("Enter username: ")
p_check = input("Enter password: ")

if u_check == username and p_check == password:
    print(f"Logged in successfully!!")
else:
    print(f"Invalid credentials.")
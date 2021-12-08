use california;
db.dropDatabase();

db.bookings.insertMany(
    [    
    {
            name: "Michael Plata",
            email: "mplata@gmail.com",
            status : "false"
        },
        {
            name: "Stefano Binando",
            email: "sbinando@gmail.com",
            status : "true"
        }
    ]
)



User.delete_all
Restaurant.delete_all
Reservation.destroy_all
Review.destroy_all
Schedule.destroy_all

u1 = User.create!(
  username: 'guest',
  password: 'password'
)

b1 = Bench.create!(
  description: 'alamo square, many dogs',
  seating: 4,
  lat: 37.775769,
  lng: -122.434960,
  picture_url: 'https://c2.staticflickr.com/4/3035/2309664044_486f5a0327_z.jpg?zz=1'
)

Reservation.create(user_id: u1.id, bench_id:  b1.id)

Review.create(author_id: u1.id, bench_id:  b1.id, body: "very good sits", rating: 5)



module.exports = [
  {
    id: 1,
    businessName: 'Nakuru Agro Research',
    businessTypeId: 2,
    registeredBy: 1,
    email: 'nakuruagroresearch@test.com',
    phoneNumber: '0785214784',
    // location: [36.107798, -0.52459],
  },
  {
    id: 2,
    businessName: 'Garissa Wholesellers',
    businessTypeId: 4,
    registeredBy: 4,
    email: 'garissawholesellers@test.com',
    phoneNumber: '0745123654',
    // location: [39.482494, 0.046692],
  },
  {
    id: 3,
    businessName: 'Embu Agrovet',
    businessTypeId: 5,
    registeredBy: 3,
    email: 'embuagrovet@test.com',
    phoneNumber: '0756231478',
    // location: [37.55894, -0.612476],
  },
  {
    id: 4,
    businessName: 'Baringo Agrovet',
    businessTypeId: 5,
    registeredBy: 6,
    email: 'baringoagrovet@test.com',
    phoneNumber: '0798562345',
    // location: [36.085502, 0.804722],
  },
  {
    id: 5,
    businessName: 'Kericho Manufacturers',
    businessTypeId: 1,
    registeredBy: 5,
    email: 'kerichomanufacturers@test.com',
    phoneNumber: '0785697412',
    // location: [35.414899, -0.590505],
  },
  {
    id: 6,
    businessName: 'Nyahururu Agrovet',
    businessTypeId: 5,
    registeredBy: 2,
    email: 'nyahururuagrovet@test.com',
    phoneNumber: '0752147856',
    // location: [36.410519, -0.00206],
  },
  {
    id: 7,
    businessName: 'Turkana Agrovet',
    businessTypeId: 5,
    registeredBy: 6,
    email: 'turkanaagrovet@test.com',
    phoneNumber: '0745697412',
    // location: [36.087023, 2.451949],
  },
  {
    id: 8,
    businessName: 'Loitokitok Retailers',
    businessTypeId: 5,
    registeredBy: 3,
    email: 'loitokitokretailers@test.com',
    phoneNumber: '0723568974',
    // location: [37.516607, -2.933098],
  },
];

// UPDATE public.business
// 	SET  location=ST_SetSRID(ST_MakePoint(-2.933098, 37.516607), 4326)
// 	WHERE id=8;

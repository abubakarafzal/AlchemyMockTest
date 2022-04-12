
const axios = require('axios');

jest.mock('axios');
const mockData =
  [
    {
      "id": 2,
      "name": "Devastator",
      "class": "Star Destroyer",
      "crew": 35000,
      "image": "https:\\url.to.image",
      "value": 1999.99,
      "status": "operational",
      "armament": [
      {
      "title": "Turbo Laser",
      "qty": "600"
      },
      {
      "title": "Ion Cannons",
      "qty": "60",
      },
      {
      "title": "Tractor Beam",
      "qty": "10",
      },
      ]
      }

  ]
;
async function getSpaceshipid() {
  const response = await axios.get('https://spaceship/');
  return response[0].id;
}


async function getSpaceshipName() {
  const response = await axios.get('https://spaceship/');
  return response[0].name;
}

async function getSpaceshipClass() {
  const response = await axios.get('https://spaceship/');
  return response[0].class;
}

async function getSpaceshipCrew() {
  const response = await axios.get('https://asd/');
  return response[0]['crew'];
}

async function getSpaceshipImage() {
  const response = await axios.get('https://spaceship/');
  return response[0].image;
}

async function getSpaceshipValue() {
  const response = await axios.get('https://spaceship/');
  return response[0].value;
}

async function getSpaceshipStatus() {
  const response = await axios.get('https://spaceshiasp/');
  return response[0].status;
}
async function getSpaceshipArmament() {
  const response = await axios.get('https://spaceshiasp/');
  return response[0].armament;
}

it('verify spaceship attributes are not undefined', async () => {
   await axios.get.mockResolvedValue(mockData);
  const id = await getSpaceshipid();
  const name = await getSpaceshipName();
  const className = await getSpaceshipClass();
  const value = await getSpaceshipValue();
  const crew = await getSpaceshipCrew();
  const image = await getSpaceshipImage();
  const status = await getSpaceshipStatus();
  const armament = await getSpaceshipArmament();

  expect(id).not.toBeUndefined();
  expect(name).not.toBeUndefined();
  expect(className).not.toBeUndefined();
  expect(value).not.toBeUndefined();
  expect(crew).not.toBeUndefined();
  expect(image).not.toBeUndefined();
  expect(status).not.toBeUndefined();
  expect(status).not.toBeUndefined();
  expect(armament).not.toBeUndefined();

  //Verify the title of ship
  expect(name).toEqual("Devastator");

  //verify the image contains url
  expect(image).toContain("https:")
  expect(image).not.toContain("png");

  //verify that crew memebers are not be less than 35000
   expect(crew).not.toBeLessThanOrEqual(30000);

   //verify id and value should be number

  expect(id).not.toBeNaN();
  expect(value).not.toBeNaN();



});


it('verify arnamenet turbo laser should contain 600 qty', async () => {
  const armament = await getSpaceshipArmament();

  const titleToFind = 'Turbo Laser'

  const arnamentQty = armament.filter(category => titleToFind.includes(category.title));


expect(arnamentQty[0]['qty']).toEqual("600");
const qtyToNumber = Math.floor(arnamentQty[0]['qty']);
expect(qtyToNumber).toBeGreaterThan(500);
});

it('verify arnamenet Ion cannon should not be empty and not less than 60', async () => {
  const armament = await getSpaceshipArmament();

  const titleToFind = 'Ion Cannons'

  const arnamentQty = armament.filter(category => titleToFind.includes(category.title));


  expect(arnamentQty[0]['qty']).toEqual("60");
  const qtyToNumber = Math.floor(arnamentQty[0]['qty']);
  expect(qtyToNumber).not.toBeLessThan(60);
});


it('Verify tractor beam should not have the quantity ', async () => {
  const armament = await getSpaceshipArmament();

  const titleToFind = 'Tractor Beam'

  const arnamentQty = armament.filter(category => titleToFind.includes(category.title));

  expect(arnamentQty[0]['qty']).toBeNull();

});

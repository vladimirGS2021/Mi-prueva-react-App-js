const user = {
  name: 'Vladimir Sáchez 3 DS',
  imageUrl: 'https://cdn.aarp.net/content/dam/aarp/auto/2017/02/1140-classic-car-safety-esp.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Foto de ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}
import React from 'react';

const colors = [
  { name: 'lightHover', hex: '#fcf4ff' },
  { name: 'darkHover', hex: '#2a004a' },
  { name: 'darkTheme', hex: '#11001F' },
];

export default {
  title: 'Design System/Colors',
};

export const Palette = () => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6">
    {colors.map(({ name, hex }) => (
      <div
        key={name}
        className="flex flex-col items-center p-4 rounded-lg shadow-md border"
      >
        <div
          className="w-20 h-20 rounded-md border"
          style={{ backgroundColor: hex }}
        />
        <p className="mt-2 font-semibold">{name}</p>
        <p className="text-sm text-gray-500">{hex}</p>
      </div>
    ))}
  </div>
)

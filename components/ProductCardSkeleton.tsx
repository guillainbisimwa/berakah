'use client';

import React from 'react';

const ProductCardSkeleton: React.FC = () => (
  <div className="bg-white rounded-lg sm:rounded-xl overflow-hidden border border-gray-100 flex flex-col">
    <div className="relative aspect-square bg-gray-100 animate-skeleton rounded-t-lg sm:rounded-t-xl" />
    <div className="p-2 sm:p-4 grow flex flex-col gap-2">
      <div className="h-4 sm:h-5 bg-gray-100 rounded animate-skeleton w-3/4" />
      <div className="h-3 bg-gray-100 rounded animate-skeleton w-1/3" />
      <div className="mt-auto flex justify-between items-end pt-2">
        <div className="h-5 sm:h-6 bg-gray-100 rounded animate-skeleton w-16" />
        <div className="h-8 w-8 sm:h-9 sm:w-9 bg-gray-100 rounded-lg animate-skeleton" />
      </div>
    </div>
  </div>
);

export default ProductCardSkeleton;

export class LocalizedContentDto {
  name: string;
  desc: string;
  specs: string[];
}

export class ContentDto {
  fr: LocalizedContentDto;
  en: LocalizedContentDto;
}

export class CreateProductDto {
  image: string;
  price: string;
  rating: number;
  category: string;
  weight: string;
  content: ContentDto;
}

export class UpdateProductDto extends CreateProductDto {}

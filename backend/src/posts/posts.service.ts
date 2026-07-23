import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post, PostDocument } from './schemas/post.schema';
import { CreatePostDto, UpdatePostDto } from './dto/post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post.name) private readonly postModel: Model<PostDocument>,
  ) {}

  async create(createPostDto: CreatePostDto): Promise<Post> {
    const newPost = new this.postModel(createPostDto);
    return newPost.save();
  }

  async findAll(language?: string): Promise<Post[]> {
    const filter = language ? { language } : {};
    const posts = await this.postModel.find(filter).exec();
    return posts.map(post => {
      const obj = post.toObject() as any;
      obj.id = obj._id.toString();
      return obj;
    });
  }

  async findOne(id: string): Promise<Post> {
    const post = await this.postModel.findById(id).exec();
    if (!post) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    const obj = post.toObject() as any;
    obj.id = obj._id.toString();
    return obj;
  }

  async update(id: string, updatePostDto: UpdatePostDto): Promise<Post> {
    const existingPost = await this.postModel.findByIdAndUpdate(
      id,
      updatePostDto,
      { new: true },
    ).exec();
    
    if (!existingPost) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    return existingPost;
  }

  async remove(id: string): Promise<Post> {
    const deletedPost = await this.postModel.findByIdAndDelete(id).exec();
    if (!deletedPost) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    return deletedPost;
  }
}

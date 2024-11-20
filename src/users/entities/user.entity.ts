import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { AbstractEntity } from '../../common/database/abstract.entity';
import { ObjectType, Field } from '@nestjs/graphql';

@Schema({ versionKey: false })
@ObjectType()
export class User extends AbstractEntity {
  @Prop()
  @Field()
  email: string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
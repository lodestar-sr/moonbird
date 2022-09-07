import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType({ description: 'User' })
export class User {
  @Field(() => ID)
  id!: number;

  @Field(() => String)
  email!: string;
}

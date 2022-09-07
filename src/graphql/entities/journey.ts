import { Field, ID, Int, ObjectType } from 'type-graphql';
import { Episode } from './episode';
import { JOURNEY_TYPE } from '../../types/enums';

@ObjectType({ description: 'Journey' })
export class Journey {
  @Field(() => ID)
  id!: number;

  @Field(() => String)
  name!: string;

  @Field(() => String)
  description!: string;

  @Field(() => String)
  type!: JOURNEY_TYPE;

  @Field(() => Int)
  progress!: number;

  @Field(() => Boolean)
  isComingSoon!: boolean;

  @Field(() => String)
  episodes?: Episode[];
}

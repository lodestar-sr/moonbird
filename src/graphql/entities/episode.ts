import { Field, ID, ObjectType } from 'type-graphql';
import { EPISODE_STATUS } from '../../types/enums';

@ObjectType({ description: 'Episode' })
export class Episode {
  @Field(() => ID)
  id!: number;

  @Field(() => String)
  name!: string;

  @Field(() => String)
  duration!: string;

  @Field(() => String)
  status!: EPISODE_STATUS;
}

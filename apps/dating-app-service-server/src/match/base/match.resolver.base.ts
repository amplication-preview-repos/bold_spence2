/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Match } from "./Match";
import { MatchCountArgs } from "./MatchCountArgs";
import { MatchFindManyArgs } from "./MatchFindManyArgs";
import { MatchFindUniqueArgs } from "./MatchFindUniqueArgs";
import { DeleteMatchArgs } from "./DeleteMatchArgs";
import { MatchService } from "../match.service";
@graphql.Resolver(() => Match)
export class MatchResolverBase {
  constructor(protected readonly service: MatchService) {}

  async _matchesMeta(
    @graphql.Args() args: MatchCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Match])
  async matches(@graphql.Args() args: MatchFindManyArgs): Promise<Match[]> {
    return this.service.matches(args);
  }

  @graphql.Query(() => Match, { nullable: true })
  async match(
    @graphql.Args() args: MatchFindUniqueArgs
  ): Promise<Match | null> {
    const result = await this.service.match(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Match)
  async deleteMatch(
    @graphql.Args() args: DeleteMatchArgs
  ): Promise<Match | null> {
    try {
      return await this.service.deleteMatch(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}

/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type FindPetsByTagsRequest = {
  /**
   * Tags to filter by
   */
  tags?: Array<string> | undefined;
};

/** @internal */
export const FindPetsByTagsRequest$inboundSchema: z.ZodType<
  FindPetsByTagsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  tags: z.array(z.string()).optional(),
});

/** @internal */
export type FindPetsByTagsRequest$Outbound = {
  tags?: Array<string> | undefined;
};

/** @internal */
export const FindPetsByTagsRequest$outboundSchema: z.ZodType<
  FindPetsByTagsRequest$Outbound,
  z.ZodTypeDef,
  FindPetsByTagsRequest
> = z.object({
  tags: z.array(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FindPetsByTagsRequest$ {
  /** @deprecated use `FindPetsByTagsRequest$inboundSchema` instead. */
  export const inboundSchema = FindPetsByTagsRequest$inboundSchema;
  /** @deprecated use `FindPetsByTagsRequest$outboundSchema` instead. */
  export const outboundSchema = FindPetsByTagsRequest$outboundSchema;
  /** @deprecated use `FindPetsByTagsRequest$Outbound` instead. */
  export type Outbound = FindPetsByTagsRequest$Outbound;
}

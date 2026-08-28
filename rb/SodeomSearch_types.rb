# frozen_string_literal: true

# Typed models for the SodeomSearch SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Search entity data model.
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] link
#   @return [String]
#
# @!attribute [rw] title
#   @return [String]
Search = Struct.new(
  :description,
  :link,
  :title,
  keyword_init: true
)

# Request payload for Search#list.
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] q
#   @return [String]
SearchListMatch = Struct.new(
  :page,
  :q,
  keyword_init: true
)


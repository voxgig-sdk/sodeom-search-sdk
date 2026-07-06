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
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] link
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
SearchListMatch = Struct.new(
  :description,
  :link,
  :title,
  keyword_init: true
)


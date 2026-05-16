# SodeomSearch SDK utility: feature_add
module SodeomSearchUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end

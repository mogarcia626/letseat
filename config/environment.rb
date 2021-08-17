# Load the Rails application.
require_relative 'application'
Jbuilder.key_format camelize: :lower

# Initialize the Rails application.
Rails.application.initialize!

# File: config/initializers/json_param_key_transform.rb
# Transform JSON request param keys from JSON-conventional camelCase to
# Rails-conventional snake_case:

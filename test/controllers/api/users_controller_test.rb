require 'test_helper'

class Api::UsersControllerTest < ActionDispatch::IntegrationTest
  test "should get post" do
    get api_users_post_url
    assert_response :success
  end

end

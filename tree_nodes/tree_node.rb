class TreeNode
	attr_reader :string_key
	attr_accessor :integer_value, :children
	def initialize(string_key, integer_value)
		@string_key = string_key
		@integer_value = integer_value
		@children = []
	end
end


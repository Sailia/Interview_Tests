class NodeManager
	attr_reader :tree_node
	def initialize(tree_node)
		@tree_node = tree_node
	end

	def add(node, tree_level_to_modify)
		# this method will update all nodes in the tree
		# that are equal to the TreeNode 
		# by adding the value of the current node to tree_level_to_modify node
		@tree_node.children 
	end

	def remove(node, tree_level_to_modify)

	end
end

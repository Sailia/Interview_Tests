require_relative('tree_node')

class NodeManager
	attr_reader :tree_node
	def initialize(tree_node)
		@tree_node = tree_node
	end

	#node1 => 
	#<Node:0x007ff4b9818ac0 @string="test1", @int=1, @children=[
	#<Node:0x007ff4b98087b0 @string="test2", @int=2, @children=[
	#<Node:0x007ff4b8902130 @string="test4", @int=4, @children=[
	#<Node:0x007ff4b885c4d8 @string="test3", @int=3, @children=[]>]>]>, 
	
	#<Node:0x007ff4b89724d0 @string="test5", @int=5, @children=[]>]>

	def add(node, tree_level_to_modify)
		# this method will update all nodes in the tree
		# that are equal to the TreeNode 
		# by adding the value of the current node to tree_level_to_modify node

		# access tree_node children at tree_level_modify
		# compare tree_node child.string with node.string
		# if same access integer_value in tree_node child and access integer_value of node
		# add them together
		# move one level down
		# repeat
		

		# check how to access nested array
		child = 0
		until @tree_node.children[child].empty? 
			if @tree_node.children[child].string_key == node.children[tree_level_to_modify].string_key
				@tree_node.children[child].integer_value += node.integer_value
				child += 1
			end
		end
		@tree_node
	end

	# def remove(node, tree_level_to_modify)

	# end
end

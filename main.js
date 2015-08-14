$(function() {

	var $task = $('#create-text')
	var $numTasks = $('.task').length
	var $importance = $('select')

	var newTask = function(importance, $numTasks, task) {

		//Build a new div tag
		var div = $('<div>', {
			class: 'task ' + importance
		})
		
		//Build a new label tag to put inside the new div tag
		var label = $('<label>', {
			for: 'task-' + $numTasks,
			class: 'text',
			text: task
		})

		//Build a new input tag to put inside the new div tag
		var input = $('<input>', {
			id: 'task-' + $numTasks,
			type: 'checkbox',
		})

		div.append(input, label)

		return div
	}

	function createButton () {

		//Get value of input
		var task = $task.val()
		
		if (task.replace(/ /g, '') == '') {
			return false;
		} else {

		importance = $importance.val()
		$numTasks++

		$('section').append(newTask(importance, $numTasks, task))
		}

		$('option[value=""]').attr('selected', true)
		$task.val('')
		
	}


		//Get the task text from the input
	$('#create-btn').click(function() {

		//Make the task
		createButton()

	})

	var $showCompleted = $('#show-completed')

	$showCompleted.on('click', function () {
		var $checkbox = $('div.task input:checked')

		if ($showCompleted.is(':checked')) {
			$checkbox.parent().show()

		} else {
			$checkbox.parent().hide()
		}
	})

	$('#tasks').on('click', 'div.task input', function () {

		if($showCompleted.is(':checked')) {
			$('div.task input:checked').parent().show()

		} else {
			$('div.task input:checked').parent().hide()
		}

	})

	//Add remove buttons
	var $remove = $('<input>', {
		type: 'checkbox',
		class: 'remove'
	}).appendTo($('.task'))

		//remove tasks
	$('section').on('click', '.remove', function () {

		if($('.remove').is(':checked')) {
			$(this).parent().remove()
		}
	})

});




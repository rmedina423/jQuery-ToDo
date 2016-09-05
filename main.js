$(function() {

	var $task = $('#create-text');
	var $numTasks = $('.task').length;
	var $importance = $('select');
	var $showCompleted = $('#show-completed');

	$('#create-btn').click(function() {
		createButton();
	});
	
	//remove tasks
	$('section').on('click', '.remove', function () {
		if($('.remove').is(':checked')) {
			$(this).parent().remove();
		}
	});
	
	$('#tasks').on('click', 'div.task input', showHideChecked);
	$showCompleted.on('click', showHideChecked);
	
	function createButton() {
		var task = $task.val();
		
		if (task.replace(/ /g, '') == '') {
			return false;
		}

		$numTasks++;

		$('section').append(newTask($importance.val(), $numTasks, task));
		$('option[value=""]').attr('selected', true);
		$task.val('');
	}
	
	function newTask(importance, $numTasks, task) {

		//Build a new div tag
		var div = $('<div>', {
			class: 'task ' + importance
		});
		
		//Build a new label tag to put inside the new div tag
		var label = $('<label>', {
			for: 'task-' + $numTasks,
			class: 'text',
			text: task
		});

		//Build a new input tag to put inside the new div tag
		var input = $('<input>', {
			id: 'task-' + $numTasks,
			type: 'checkbox',
		});

		//Add remove buttons
		var remove = $('<input>', {
			type: 'checkbox',
			class: 'remove'
		});

		return div.append(input, label, remove);
	}

	function showHideChecked() {
		var $checkbox = $('div.task input:checked');

			if ($showCompleted.is(':checked')) {
				$checkbox.parent().show();
			} else {
				$checkbox.parent().hide();
			}
	}
});
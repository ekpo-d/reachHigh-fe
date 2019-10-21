/* eslint-disable camelcase */
import {
	observable,
	action,
	runInAction,
	toJS,
} from 'mobx';
import Router from 'next/router';
import cookie from 'js-cookie';

import {
	setClassProps,
	getData,
	runInActionUtil,
	patchData,
} from '../utils/helpers';

/**
 * MobX store class.
 * For goals and tasks component and related actions.
 * @class
 */
export default class GoalsStore {
	constructor(uiStore) {
		this.uiStore = uiStore;
	}

	/**
	 * Contains goal icons based on the goal title.
	 * @type {Object}
	 */
	goalIcons = {
		'Build my network': 'network.svg',
		'Personal Growth': 'growth.svg',
		'Get a promotion': 'promotion.svg',
		'Be a better leader': 'leader.svg',
	}

	/**
	 * User object, contains user data
	 * @type {Object}
	 */
	@observable
	user = {
    completedTasks: [],
    name: '',
    email: '',
    createdAt: '',
    selectedGoals: [],
	};

	@observable
  currentTask = {};

	@observable
  goalsSaving = false;

	@observable
	selectedGoals = []

	@observable
	completedTasks = []

	@observable
	goals = []

	@observable
	tasks = []

	/**
   * selectGoal function,
	 * Add a goal to the array of selected goals.
	 * @param {object} e - DOM event.
	 * @param {string} id - goal id.
	 */
	@action
	selectGoal = (e, id) => {
		e.preventDefault();
		if (this.selectedGoals.includes(id)) {
			this.selectedGoals.splice(this.selectedGoals.indexOf(id), 1);
		}
		else {
			this.selectedGoals.push(id);
		}
	};

	/**
   * getUser function,
	 * Gets the user object in the event of a browser refresh.
	 */
	@action
	getUser = async () => {
		const u_id = cookie.get('u_id');

    await getData(`users/${u_id}`)
		.then(res => {
			runInAction(() => {
				this.user = res.data;
				this.selectedGoals = res.data.selectedGoals;
			});
		})
		.catch(() => {
			this.uiStore.setClassProps([
				{
					name: 'open',
					value: true,
				},
				{
					name: 'type',
					value: 'error',
				},
			], this.uiStore.modal);
		});
	};

	/**
   * saveGoals function,
	 * Saves selected goals in the user object
	 * @param {object} e - DOM event.
	 */
	@action
	saveGoals = async e => {
		e.preventDefault();
		this.goalsSaving = true;
    await patchData(`users/${this.user._id}`, {
			selectedGoals: toJS(this.selectedGoals),
		})
		.then(() => {
			runInActionUtil(this, 'goalsSaving', false);
			Router.push('/tasks');
		})
		.catch(() => {
			runInActionUtil(this, 'goalsSaving', false);
			this.uiStore.setClassProps([
				{
					name: 'open',
					value: true,
				},
				{
					name: 'type',
					value: 'error',
				},
			], this.uiStore.modal);
		});
	};

	/**
   * calcTasks function,
	 * Generated tasks off the user selected goals.
	 */
	@action
	calcTasks = async () => {
		await Promise.all(this.user.selectedGoals.map(goal_id => getData(`goals/${goal_id}`)))
		.then(goalsData => {
			// eslint-disable-next-line no-plusplus
			for (let i = 0; i < goalsData.length; i++) {
				// eslint-disable-next-line no-plusplus
				for (let j = 0; j < goalsData[i].data.tasks.length; j++) {
					const task = Object.assign(
						{},
						{
							goalId: goalsData[i].data._id,
							goalTitle: goalsData[i].data.title,
						},
						goalsData[i].data.tasks[j],
					);
					runInAction(() => {
						this.tasks.push(task);
					});
				}
			}
		})
		.catch(() => {
			this.uiStore.setClassProps([
				{
					name: 'open',
					value: true,
				},
				{
					name: 'type',
					value: 'error',
				},
			], this.uiStore.modal);
		});
	}

	/**
   * getTasks function,
	 * Gets the list og tasks afer getting the user object
	 * and generating tasks.
	 */
	@action
	getTasks = () => {
		if (!this.tasks.length) {
			this.getUser()
			.then(() => this.calcTasks());
		}
	};

	/**
   * getTask function,
	 * Gets the currently clicked task.
	 * @param {string} taskId - task id of current task being viewed.
	 */
	@action
	getTask = taskId => {
		if (this.tasks.length) {
			this.currentTask = this.tasks.find(task => task._id === taskId);
		}
		else {
			this.getUser()
			.then(async () => this.calcTasks())
			.then(() => {
				const taskData = this.tasks.find(task => task._id === taskId);
				runInActionUtil(this, 'currentTask', taskData);
			});
		}
	};

	/**
   * onTaskComplete function,
	 * Saved completed task into user object.
	 * @param {string} taskId - task id of task to be marked as completed.
	 */
	@action
	onTaskComplete = async (e, taskId) => {
		e.preventDefault();
		const u_id = cookie.get('u_id');

		if (!this.user.completedTasks.includes(taskId)) {
			this.user.completedTasks.push(taskId);
			await patchData(`users/${u_id}`, {
				completedTasks: toJS(this.user.completedTasks),
			})
			.catch(() => {
				this.uiStore.setClassProps([
					{
						name: 'open',
						value: true,
					},
					{
						name: 'type',
						value: 'error',
					},
				], this.uiStore.modal);
			});
		}
	};

	@action
	setClassProps = (arr, self = this) => setClassProps(arr, self);
}

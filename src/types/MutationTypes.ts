export const FEED_MUTATION_TYPES = {
	ADD_FEED: 'ADD_FEED',
	SET_FEEDS: 'SET_FEEDS',
	UPDATE_FEED: 'UPDATE_FEED',

	SET_FEED_ALL_READ: 'SET_FEED_ALL_READ',
	MODIFY_FEED_UNREAD_COUNT: 'MODIFY_FEED_UNREAD_COUNT',

	FEED_DELETE: 'FEED_DELETE',
}

export const FOLDER_MUTATION_TYPES = {
	SET_FOLDERS: 'SET_FOLDERS',
	DELETE_FOLDER: 'DELETE_FOLDER',
	UPDATE_FOLDER: 'UPDATE_FOLDER',

	MODIFY_FOLDER_UNREAD_COUNT: 'MODIFY_FOLDER_UNREAD_COUNT',
}

export const FEED_ITEM_MUTATION_TYPES = {
	SET_ITEMS: 'SET_ITEMS',
	UPDATE_ITEM: 'UPDATE_ITEM',

	SET_SELECTED_ITEM: 'SET_SELECTED_ITEM',
	SET_PLAYING_ITEM: 'SET_PLAYING_ITEM',

	SET_STARRED_COUNT: 'SET_STARRED_COUNT',
	SET_UNREAD_COUNT: 'SET_UNREAD_COUNT',

	SET_FETCHING: 'SET_FETCHING',
	SET_ALL_LOADED: 'SET_ALL_LOADED',
	SET_LAST_ITEM_LOADED: 'SET_LAST_ITEM_LOADED',
}

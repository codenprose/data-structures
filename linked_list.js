/*
  Doubly Linked List
  - A list of nodes where the tail represents the first item and the tail represents the last.
  - Insertions and Deletions in Linked Lists are faster than Arrays

 Including methods inside of the Constructor function vs adding them to the Prototype object of the constructor
  - It's all about memory usage
  - If you add methods to the constructor, every time you instantiate a new LinkedList, 
  you would create new methods and hold them in memory
  - Prototype methods are shared between every instance
*/

/**
 * LinkedList constructor
 */
function LinkedList() {
  this.head = null
}

/**
 * Node constructor
 * @param {*} data
 * @param {*} next
 * @param {*} prev
 */
function Node(data, next, prev) {
	this.data = data
	this.next = next
	this.prev = prev
}

/**
 * Check if list is empty
 * @returns {Boolean}
 */
LinkedList.prototype.isEmpty = function() {
  return this.head === null
}

/**
 * Calculate size of list
 * @returns {Number}
 */
LinkedList.prototype.size = function() {
  let count = 0
  let current = this.head

  while (current !== null) {
    count++
    current = current.next
  }

  return count
}

/**
 * Check if data is in list
 * @param {*} data
 */
LinkedList.prototype.contains = function(data) {
  let current = this.head

  while (current !== null) {
    if (current.data === data) {
      return true
    }
    current = current.next
  }

  return false
}

/**
 * Add node to list
 * @param {*} data 
 */
LinkedList.prototype.add = function (data) {
  if (this.isEmpty()) {
    this.head = new Node(data, null, null)
    return
  }

  let current = this.head
  while (current.next !== null) {
    current = current.next
  }
  current.next = new Node(data, null, current)
}


/**
 * Remove node from list
 * @param {*} data
 */
LinkedList.prototype.remove = function (data) {
  if (this.isEmpty()) {
    return
  }

  if (this.head.data === data) {
    this.head = this.head.next
    return
  }

  let current = this.head
  while (current !== null) {
    if (current.data === data) {
      let prev = current.prev
      prev.next = current.next
      return
    }
    current = current.next
  }
}

/**
 * Search for node in list
 * @param {*} data
 */
LinkedList.prototype.search = function(data) {
  let current = this.head

  while (current !== null) {
    if (current.data === data) {
      return current
    }
    current = current.next
  }
  return null
}

/**
 * Find index of a given value
 * @param {*} data
 * @returns {Number}
 */
LinkedList.prototype.indexOf = function(data) {
  if (this.isEmpty()) {
    return
  }

  let current = this.head
  let index = 0

  while (current.next !== null) {
    if (current.data === data) {
      return index
    }
    index++
    current = current.next
  }

  return - 1
}

/**
 * Get the data at the given index
 * @param {Number} index
 * @return {*} 
 */
LinkedList.prototype.dataAtIndex = function(index) {
  if (this.isEmpty()) {
    return
  }

  let count = 0
  let current = this.head

  while (current.next !== null) {
    if (count === index) {
      return current
    }
    count++
  }
  return null
}

LinkedList.prototype.print = function() {
  let current = this.head

  while (current !== null) {
    console.log(current.data)
    current = current.next
  }
}
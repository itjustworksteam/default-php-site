<?php

	class CheckTest extends PHPUnit_Framework_TestCase {

		public function testOk() {
			$this->assertTrue(true);
			$this->assertFalse(false);
		}

		public function testloadOk() {
			$this->assertTrue(Check::returnTrue());
			$this->assertFalse(Check::returnFalse());
		}

	}

?>
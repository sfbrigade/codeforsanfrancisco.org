SHELL := /bin/bash
BUNDLE := bundle
YARN := yarn
JS_VENDOR_DIR = js/vendor
CSS_VENDOR_DIR = css/vendor
CSS_FONTS_DIR = css/
JEKYLL := $(BUNDLE) exec jekyll

PROJECT_DEPS := Gemfile package.json

.PHONY: all
all : serve

.PHONY: check
check:
	$(JEKYLL) doctor

.PHONY: install
install: $(PROJECT_DEPS)
	$(BUNDLE) install --path vendor/bundle
	$(YARN) install

.PHONY: update
update: $(PROJECT_DEPS)
	$(BUNDLE) update
	$(YARN) upgrade

.PHONY: include-yarn-deps
include-yarn-deps: include-yarn-js include-yarn-css

# TODO(jszwedko) rewrite this to use the files as targets
.PHONY: include-yarn-js
include-yarn-js:
	mkdir -p $(JS_VENDOR_DIR)
	cp node_modules/jquery/dist/jquery.min.js $(JS_VENDOR_DIR)
	cp node_modules/datatables.net/js/jquery.dataTables.js $(JS_VENDOR_DIR)
	cp node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js $(JS_VENDOR_DIR)
	cp node_modules/jquery-address/src/jquery.address.js $(JS_VENDOR_DIR)
	cp node_modules/bootstrap/dist/js/bootstrap.min.js $(JS_VENDOR_DIR)
	cp node_modules/html5shiv/dist/html5shiv.min.js $(JS_VENDOR_DIR)
	cp node_modules/respond.js/dest/respond.min.js $(JS_VENDOR_DIR)
	cp node_modules/mustache/mustache.min.js $(JS_VENDOR_DIR)
	cp node_modules/lunr/lunr.js $(JS_VENDOR_DIR)
	cp node_modules/popper.js/dist/umd/popper.min.js $(JS_VENDOR_DIR)

# TODO(jszwedko) rewrite this to use the files as targets
.PHONY: include-yarn-css
include-yarn-css:
	mkdir -p $(CSS_VENDOR_DIR)
	cp node_modules/bootstrap/dist/css/bootstrap.min.css $(CSS_VENDOR_DIR)
	cp node_modules/font-awesome/css/font-awesome.min.css $(CSS_VENDOR_DIR)
	cp node_modules/datatables.net-bs4/css/dataTables.bootstrap4.css $(CSS_VENDOR_DIR)
	cp -R node_modules/font-awesome/fonts $(CSS_FONTS_DIR)

.PHONY: build
build: install include-yarn-deps
	$(JEKYLL) build

.PHONY: serve
serve: install include-yarn-deps
	$(JEKYLL) serve

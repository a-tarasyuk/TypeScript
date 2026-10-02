package fourslash_test

import (
	"testing"

	"github.com/microsoft/TypeScript/tsc/internal/fourslash"
	"github.com/microsoft/TypeScript/tsc/internal/ls/lsutil"
	"github.com/microsoft/TypeScript/tsc/internal/lsp/lsproto"
	"github.com/microsoft/TypeScript/tsc/internal/testutil"
)

func TestExportDefer1(t *testing.T) {
	t.Parallel()
	defer testutil.RecoverAndFail(t, "Panic on fourslash test")
	const content = `export defer { b } from "./a";
export { a } from "./a";
export type { I } from "./a";
export defer { c } from "./a";
export defer * as d from "./a";
export defer * as e from "./a";
void 0;`
	f, done := fourslash.NewFourslash(t, nil /*capabilities*/, content)
	defer done()
	f.VerifyOrganizeImports(
		t,
		`export defer * as d from "./a";
export defer * as e from "./a";
export { a } from "./a";
export type { I } from "./a";
export defer { b, c } from "./a";
void 0;`,
		lsproto.CodeActionKindSourceSortImportsTs,
		&lsutil.UserPreferences{OrganizeImportsSort: lsutil.OrganizeImportsSortOrdinalIgnoreCase},
	)
}
